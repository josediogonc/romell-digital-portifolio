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
            eyebrow="About"
            id="about-title"
            number="03"
            title="Built around the image. Useful everywhere on set."
          />
          <div className={styles.aboutLayout}>
            <p className={styles.aboutIntroduction}>{aboutContent.introduction}</p>
            <div className={styles.aboutStory}>
              {aboutContent.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <p className={styles.aboutTools}>{aboutContent.tools}</p>
              <blockquote className={styles.aboutQuote}>
                <p>{aboutContent.pullQuote}</p>
              </blockquote>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
