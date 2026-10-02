import { Container } from "@/components/ui/Container";
import { Arrow } from "@/components/ui/Arrow";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer>
      <Container>
        <div className={styles.inner}>
          <span className={styles.brand}>ROMELL TABOSA</span>
          <span className={styles.location}>San Diego, California</span>
          <a href="#top">Back to top <Arrow diagonal /></a>
        </div>
      </Container>
    </footer>
  );
}
