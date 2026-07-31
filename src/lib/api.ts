import type { Poll, PollScope, PopularPollsResponse } from '../types/poll';

const API_URL =
  process.env.API_URL ||
  process.env.NEXT_PUBLIC_API_URL ||
  'https://kratikos-dev-backend-development.up.railway.app';

export async function getPopularPolls(
  scope?: PollScope,
  limit = 3,
  signal?: AbortSignal,
): Promise<Poll[]> {
  const params = new URLSearchParams();
  if (scope) params.set('scope', scope);
  params.set('limit', String(limit));

  const fetchSignal = signal || AbortSignal.timeout(3000);

  const response = await fetch(`${API_URL}/polls/popular?${params.toString()}`, {
    headers: { Accept: 'application/json' },
    signal: fetchSignal,
    next: { revalidate: 600 } // Cache for 10 minutes
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch popular polls: ${response.status}`);
  }

  const json: PopularPollsResponse = await response.json();
  return json.data ?? [];
}

export interface SharedPost {
  id: string;
  title?: string | null;
  content?: string | null;
  imageUrl?: string | null;
  image_url?: string | null;
  scope?: string | null;
  category?: {
    id?: string | null;
    name?: string | null;
    description?: string | null;
  } | null;
  author?: {
    name?: string | null;
    nickname?: string | null;
  } | null;
  poll?: {
    id: string;
    question?: string | null;
    description?: string | null;
    options?: Array<{
      id: string;
      content: string;
      votesCount?: number;
    }> | null;
  } | null;
}

export async function getSharedPost(id: string): Promise<SharedPost | null> {
  try {
    const response = await fetch(
      `${API_URL}/posts/${encodeURIComponent(id)}/preview`,
      {
        headers: { Accept: 'application/json' },
        cache: 'no-store',
      },
    );
    if (!response.ok) return null;

    const body: unknown = await response.json();
    if (!body || typeof body !== 'object') return null;
    const record = body as Record<string, unknown>;
    const post =
      record.data && typeof record.data === 'object'
        ? (record.data as SharedPost)
        : (record as unknown as SharedPost);
    return post.id ? post : null;
  } catch {
    return null;
  }
}

export interface PlatformStats {
  todayVotes: number;
  activeUsers: number;
  engagementPercentage: number;
  totalVotes: number;
  totalDiscussions: number;
}

export async function getPlatformStats(): Promise<PlatformStats> {
  const fallbackStats: PlatformStats = {
    todayVotes: 2500000,
    activeUsers: 150000,
    engagementPercentage: 89,
    totalVotes: 2500000,
    totalDiscussions: 85000,
  };

  try {
    const response = await fetch(`${API_URL}/stats`, {
      headers: { Accept: 'application/json' },
      signal: AbortSignal.timeout(3000),
      next: { revalidate: 600 }, // Mantem dados em cache por 10 minutos
    });

    if (!response.ok) return fallbackStats;
    const body = await response.json();
    const data = body?.data ?? body;

    return {
      todayVotes: Number(data.votesToday ?? data.todayVotes ?? data.votes_today ?? data.today_votes ?? fallbackStats.todayVotes),
      activeUsers: Number(data.activeUsers ?? data.active_users ?? fallbackStats.activeUsers),
      engagementPercentage: Number(data.engagementRate ?? data.engagementPercentage ?? data.engagement_rate ?? data.engagement_percentage ?? fallbackStats.engagementPercentage),
      totalVotes: Number(data.registeredVotes ?? data.totalVotes ?? data.registered_votes ?? data.total_votes ?? fallbackStats.totalVotes),
      totalDiscussions: Number(data.discussionsCreated ?? data.totalDiscussions ?? data.discussions_created ?? data.total_discussions ?? fallbackStats.totalDiscussions),
    };
  } catch {
    return fallbackStats;
  }
}
