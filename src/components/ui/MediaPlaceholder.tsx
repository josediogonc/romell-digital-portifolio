import styles from "./MediaPlaceholder.module.css";

export function MediaPlaceholder() {
  return (
    <figure className={styles.frame} aria-label="Placeholder for a future production still or behind-the-scenes image">
      <div className={styles.topLine} aria-hidden="true"><span>FRAME 001</span><span>SD / CA</span></div>
      <div className={styles.focus} aria-hidden="true"><span>+</span></div>
      <figcaption className={styles.caption}>
        <span className={styles.captionTitle}>Behind the frame.</span>
        <span className={styles.captionNote}>Production still / Coming soon</span>
      </figcaption>
      <span className={styles.ratio} aria-hidden="true">2.39:1</span>
    </figure>
  );
}
