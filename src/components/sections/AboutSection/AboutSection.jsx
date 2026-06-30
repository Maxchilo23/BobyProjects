import styles from './AboutSection.module.css'

function AboutSection() {
  return (
    <section className="section">
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <span className={styles.eyebrow}>Sobre mí</span>
          <h2 className={styles.title}>Desarrollo software pensado para negocios reales, no solo para portafolios</h2>
          <p className={styles.description}>
            Soy estudiante de Desarrollo de Software con experiencia construyendo sistemas completos:
            tiendas online, sistemas de gestión y plataformas de soporte. Trabajo con React, Node.js,
            ASP.NET Core y MySQL, y me enfoco en soluciones prácticas que tu equipo pueda usar desde el primer día.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection