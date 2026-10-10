import { Container } from "@/components/ui/Container";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className={styles.hero}>
      <Container>
        <h1 id="hero-title" className={styles.name}>
          <span className={styles.nameText}><span>ROMELL</span><span>TABOSA</span></span>
        </h1>
        <div className={styles.introduction}>
          <div>
            <p className={styles.title}>Camera Operator · G&amp;E</p>
            <p className={styles.disciplines}>Video Production</p>
            <p className={`${styles.eyebrow} ${styles.location}`}>San Diego, California</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
