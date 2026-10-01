import styles from "./SectionHeading.module.css";

type SectionHeadingProps = {
  id: string;
  number: string;
  title: string;
  description?: string;
  eyebrow?: string;
};

export function SectionHeading({ id, number, title, description, eyebrow }: SectionHeadingProps) {
  return (
    <div className={styles.heading}>
      <div className={styles.titleRow}>
        <span className={styles.number} aria-hidden="true">{number}</span>
        <div className={styles.titleContent}>
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          <h2 id={id}>{title}</h2>
        </div>
      </div>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
