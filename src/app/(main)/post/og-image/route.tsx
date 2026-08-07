import type { NextRequest } from "next/server";
import { generateOgImageResponse } from "@/lib/og-generator";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
	const data = request.nextUrl.searchParams.get("data") || undefined;
	return generateOgImageResponse(data);
}
