import { ImageResponse } from "next/og";
import { SocialPreview, socialPreviewAlt } from "@/components/metadata/SocialPreview";

export const alt = socialPreviewAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(<SocialPreview />, size);
}
