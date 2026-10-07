"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./YouTubePreview.module.css";

type YouTubePreviewProps = {
  title: string;
  videoId: string;
  orientation?: "landscape" | "portrait";
};

const landscapeThumbnails = ["maxresdefault", "sddefault", "hqdefault", "mqdefault"] as const;
const portraitThumbnails = ["hqdefault", "mqdefault"] as const;

export function YouTubePreview({ title, videoId, orientation = "landscape" }: YouTubePreviewProps) {
  const [playing, setPlaying] = useState(false);
  const [thumbnailIndex, setThumbnailIndex] = useState(0);
  const thumbnails = orientation === "portrait" ? portraitThumbnails : landscapeThumbnails;
  const thumbnail = thumbnails[thumbnailIndex];

  const tryNextThumbnail = () => {
    setThumbnailIndex((current) => current === thumbnailIndex ? current + 1 : current);
  };

  return (
    <div className={`${styles.frame} ${orientation === "portrait" ? styles.portrait : ""}`}>
      {playing ? (
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className={styles.player}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&playsinline=1&rel=0`}
          title={`${title} video`}
        />
      ) : (
        <button
          aria-label={`Play ${title} video`}
          className={styles.preview}
          onClick={() => setPlaying(true)}
          type="button"
        >
          {thumbnail ? (
            <Image
              alt=""
              className={styles.thumbnail}
              fill
              key={`${videoId}-${thumbnail}`}
              loading="lazy"
              onError={(event) => {
                event.currentTarget.style.visibility = "hidden";
                tryNextThumbnail();
              }}
              onLoad={(event) => {
                if (event.currentTarget.naturalWidth <= 120) {
                  event.currentTarget.style.visibility = "hidden";
                  tryNextThumbnail();
                }
              }}
              sizes="(min-width: 1440px) 1280px, calc(100vw - 2rem)"
              src={`https://i.ytimg.com/vi/${videoId}/${thumbnail}.jpg`}
              unoptimized
            />
          ) : null}
          <span className={styles.playIndicator} aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5.5 19 12 8 18.5v-13Z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
