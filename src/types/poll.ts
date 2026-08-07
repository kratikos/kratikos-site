export type PollScope = "internacional" | "nacional" | "regional";

export interface PollOption {
	id: string;
	pollId: string;
	content: string;
	votesCount: number;
}

export interface PollPost {
	id: string;
	title: string;
	scope: PollScope;
	commentsCount: number;
	likesCount: number;
	sharesCount: number;
}

export interface Poll {
	id: string;
	question: string;
	description?: string | null;
	options: PollOption[];
	post: PollPost;
}

export interface PopularPollsResponse {
	data: Poll[];
	total: number;
}
