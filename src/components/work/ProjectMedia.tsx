import Image from "next/image";
import type { CSSProperties } from "react";
import type { ProjectMedia as ProjectMediaData } from "@/content/projects";
import styles from "./ProjectMedia.module.css";

type ProjectMediaProps = {
  fallbackTitle: string;
  media: ProjectMediaData;
  priority?: boolean;
  sizes?: string;
};

export function ProjectMedia({
  fallbackTitle,
  media,
  priority = false,
  sizes = "100vw",
}: ProjectMediaProps) {
  const dimensions =
    media.type === "image" && media.width && media.height
      ? ({ aspectRatio: `${media.width} / ${media.height}` } satisfies CSSProperties)
      : undefined;

  if (media.type === "video") {
    return (
      <figure className={styles.frame}>
        <video
          aria-label={media.title ?? fallbackTitle}
          className={styles.video}
          controls
          playsInline
          poster={media.poster}
          preload="metadata"
          src={media.src}
        />
      </figure>
    );
  }

  return (
    <figure className={styles.frame} style={dimensions}>
      <Image
        alt={media.alt}
        className={styles.image}
        fill
        priority={priority}
        sizes={sizes}
        src={media.src}
      />
    </figure>
  );
}
