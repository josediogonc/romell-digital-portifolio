import Link from "next/link";
import { Container } from "@/components/ui/Container";
import styles from "./ProjectPage.module.css";

export default function ProjectNotFound() {
  return (
    <main id="main" className={styles.main}>
      <Container>
        <section className={styles.notFound} aria-labelledby="not-found-title">
          <p className={styles.eyebrow}>Project unavailable</p>
          <h1 id="not-found-title">This project is not available.</h1>
          <p>The requested work may be unpublished or the address may be incorrect.</p>
          <Link href="/#work">← Back to selected work</Link>
        </section>
      </Container>
    </main>
  );
}
