import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../ui/Button/Button'
import styles from './Navbar.module.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logo}>Boby<span>Projects</span></Link>

        <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Inicio</Link>
          <Link to="/servicios" onClick={() => setIsOpen(false)}>Servicios</Link>
          <Link to="/portafolio" onClick={() => setIsOpen(false)}>Portafolio</Link>
          <Link to="/contacto" onClick={() => setIsOpen(false)}>Contacto</Link>
        </nav>

        <div className={styles.cta}>
          <Button href="https://wa.me/51955429147" variant="accent">WhatsApp</Button>
        </div>

        <button className={styles.burger} onClick={() => setIsOpen(!isOpen)} aria-label="Menú">
          ☰
        </button>
      </div>
    </header>
  )
}

export default Navbar