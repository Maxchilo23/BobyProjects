import styles from './Card.module.css'

function Card({ icon: Icon, title, description }) {
  return (
    <div className={styles.card}>
      {Icon && (
        <div className={styles.iconWrapper}>
          <Icon className={styles.icon} size={26} strokeWidth={1.8} />
        </div>
      )}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  )
}

export default Card