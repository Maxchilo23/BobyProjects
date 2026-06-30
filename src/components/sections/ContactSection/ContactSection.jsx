import Button from '../../ui/Button/Button'
import styles from './ContactSection.module.css'

function ContactSection() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.title}>¿Listo para digitalizar tu negocio?</h2>
        <p className={styles.subtitle}>Escríbeme y conversemos sobre tu proyecto, sin compromiso.</p>
        <Button href="https://wa.me/51955429147" variant="accent">Hablemos por WhatsApp</Button>
      </div>
    </section>
  )
}

export default ContactSection