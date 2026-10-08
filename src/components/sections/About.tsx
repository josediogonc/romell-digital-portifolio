import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutContent } from "@/content/profile";
import styles from "./Sections.module.css";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className={styles.section}>
      <Container>
        <div className={styles.content}>
          <SectionHeading
            id="about-title"
            number="05"
            title="About"
          />
          <div className={styles.aboutLayout}>
            <div className={styles.aboutAside}>
              <figure className={styles.aboutMedia}>
                <Image
                  alt="Black-and-white portrait of Romell Tabosa"
                  className={styles.aboutImage}
                  fill
                  sizes="(min-width: 1440px) 480px, (min-width: 768px) 38vw, calc(100vw - 2rem)"
                  src="/images/romell-profile.png"
                />
              </figure>
            </div>
            <div className={styles.aboutStory}>
              {aboutContent.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
