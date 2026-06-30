import SectionTitle from '../../ui/SectionTitle/SectionTitle'
import { portfolio } from '../../../data/portfolio'
import styles from './PortfolioSection.module.css'

function PortfolioSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Proyectos reales"
          title="Algunos trabajos que hemos hecho"
        />
        <div className={styles.grid}>
          {portfolio.map((project) => (
            <div key={project.id} className={styles.card}>
              <img src={project.image} alt={project.title} className={styles.image} />
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map((tag, i) => (
                  <span key={i} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection