import styles from './Footer.module.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div>
          <h3 className={styles.logo}>BobyProjects</h3>
          <p className={styles.text}>Software a medida para micro y medianas empresas en Perú.</p>
        </div>

        <div>
          <h4 className={styles.heading}>Contacto</h4>
          <p><a href="https://wa.me/51955429147">WhatsApp: +51 955 429 147</a></p>
          <p><a href="mailto:contacto@tumarca.com">contacto@tumarca.com</a></p>
        </div>

        <div>
          <h4 className={styles.heading}>Enlaces</h4>
          <p><a href="/servicios">Servicios</a></p>
          <p><a href="/portafolio">Portafolio</a></p>
        </div>
      </div>

      <p className={styles.copy}>© {year} TuMarca Software. Todos los derechos reservados.</p>
    </footer>
  )
}

export default Footer