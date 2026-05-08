import type { Poll, PollScope, PopularPollsResponse } from '../types/poll';

const API_URL =
  import.meta.env.VITE_API_URL ||
  'https://kratikos-dev-backend-development.up.railway.app';

export async function getPopularPolls(
  scope?: PollScope,
  limit = 3,
  signal?: AbortSignal,
): Promise<Poll[]> {
  const params = new URLSearchParams();
  if (scope) params.set('scope', scope);
  params.set('limit', String(limit));

  const response = await fetch(`${API_URL}/polls/popular?${params.toString()}`, {
    headers: { Accept: 'application/json' },
    signal,
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch popular polls: ${response.status}`);
  }

  const json: PopularPollsResponse = await response.json();
  return json.data ?? [];
}
