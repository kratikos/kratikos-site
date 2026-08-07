import { generateOgImageResponse } from "@/lib/og-generator";

export const runtime = "edge";
export const alt = "Kratikos - Sua voz digital";
export const size = {
	width: 1200,
	height: 630,
};
export const contentType = "image/png";

export default async function Image() {
	return generateOgImageResponse();
}
