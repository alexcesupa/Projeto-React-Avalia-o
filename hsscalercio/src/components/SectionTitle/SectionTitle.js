import styles from './SectionTitle.module.css';

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className={styles.title}>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export default SectionTitle;
