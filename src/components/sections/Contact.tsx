import { Container } from "@/components/ui/Container";
import { Arrow } from "@/components/ui/Arrow";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/content/site";
import styles from "./Sections.module.css";

export function Contact() {
  const contactEmail = siteConfig.email.trim();
  const contactPhone = siteConfig.phone.value.trim();
  const contactSocials = siteConfig.socials.filter(
    (social) => social.url.trim() && (social.label === "Instagram" || social.label === "LinkedIn"),
  );

  return (
    <section id="contact" aria-labelledby="contact-title" className={`${styles.section} ${styles.contact}`}>
      <Container>
        <div className={styles.content}>
          <SectionHeading
            eyebrow="Contact"
            id="contact-title"
            number="06"
            title="Let’s work together."
          />
          <div className={styles.contactBlock}>
            <p className={styles.availability}>
              Available for freelance crew and production work in San Diego and Southern California.
            </p>
            <div className={styles.contactMethods}>
              {contactEmail ? (
                <a className={styles.contactAction} href={`mailto:${contactEmail}`}>
                  <Icon className={styles.contactIcon} name="email" />
                  <span className={styles.contactCopy}>
                    <span className={styles.contactLabel}>Email</span>
                    <span className={styles.contactAddress}>{contactEmail}</span>
                  </span>
                  <span className={styles.contactArrow}><Arrow diagonal /></span>
                </a>
              ) : null}
              {contactPhone ? (
                <a className={styles.contactAction} href={`tel:${contactPhone}`}>
                  <Icon className={styles.contactIcon} name="phone" />
                  <span className={styles.contactCopy}>
                    <span className={styles.contactLabel}>Phone</span>
                    <span className={styles.contactAddress}>{siteConfig.phone.display}</span>
                  </span>
                  <span className={styles.contactArrow}><Arrow diagonal /></span>
                </a>
              ) : null}
              {contactSocials.length ? (
                <div className={styles.contactSocials}>
                  {contactSocials.map((social) => (
                    <a
                      className={`${styles.contactAction} ${styles.contactSocialAction}`}
                      href={social.url}
                      key={social.label}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Icon
                        className={styles.contactIcon}
                        name={social.label === "Instagram" ? "instagram" : "linkedin"}
                      />
                      <span className={styles.contactCopy}>
                        <span className={styles.contactLabel}>{social.label}</span>
                        <span className={styles.contactAddress}>{social.display ?? social.url}</span>
                      </span>
                      <span className={styles.contactArrow}><Arrow diagonal /></span>
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
