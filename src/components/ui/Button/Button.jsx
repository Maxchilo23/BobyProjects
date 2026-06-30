import styles from './Button.module.css'

function Button({ children, href, variant = 'primary', onClick, type = 'button' }) {
  const className = `${styles.btn} ${styles[variant]}`

  if (href) {
    return (
      <a href={href} className={className} target={href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button