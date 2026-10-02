import { Container } from "@/components/ui/Container";
import { Arrow } from "@/components/ui/Arrow";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className={styles.hero}>
      <Container>
        <div className={styles.eyebrow}><span>Independent production crew</span><span>San Diego, California</span></div>
        <h1 id="hero-title" className={styles.name}>
          <span className={styles.nameText}><span>ROMELL</span><span>TABOSA</span></span>
          <span className={styles.nameMark} aria-hidden="true">↗</span>
        </h1>
        <div className={styles.introduction}>
          <div>
            <p className={styles.title}>Production Tech &amp;<br />Camera Operator</p>
            <p className={styles.disciplines}>Camera <span>•</span> Grip <span>•</span> Audio <span>•</span> Focus Pulling <span>•</span> On-Set Support</p>
          </div>
          <div className={styles.summary}>
            <p>Commercial production crew member and visual storyteller based in San Diego, California.</p>
            <div className={styles.actions}>
              <a href="#work" className={styles.primary}>View my work <Arrow /></a>
              <a href="#contact" className={styles.secondary}>Contact me <Arrow diagonal /></a>
            </div>
          </div>
        </div>
        <MediaPlaceholder />
        <div className={styles.mediaFooter} aria-hidden="true"><span>Camera. Crew. Collaboration.</span><span>Scroll to explore ↓</span></div>
      </Container>
    </section>
  );
}
