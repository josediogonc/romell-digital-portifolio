import styles from "./SectionHeading.module.css";

type SectionHeadingProps = {
  id: string;
  number: string;
  title: string;
  description?: string;
};

export function SectionHeading({ id, number, title, description }: SectionHeadingProps) {
  return (
    <div className={styles.heading}>
      <div className={styles.titleRow}>
        <span className={styles.number} aria-hidden="true">{number}</span>
        <h2 id={id}>{title}</h2>
      </div>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
