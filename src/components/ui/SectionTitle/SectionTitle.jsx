import styles from './SectionTitle.module.css'

function SectionTitle({ eyebrow, title, subtitle, align = 'center' }) {
  return (
    <div className={`${styles.wrapper} ${styles[align]}`}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  )
}

export default SectionTitle