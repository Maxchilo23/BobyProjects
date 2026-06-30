import { NotebookPen, TrendingDown, LineChart } from 'lucide-react'
import { useScrollReveal } from '../../../hooks/useScrollReveal'
import Card from '../../ui/Card/Card'
import SectionTitle from '../../ui/SectionTitle/SectionTitle'
import styles from './ProblemsSection.module.css'

const problems = [
  { icon: NotebookPen, title: '¿Llevas tu inventario en cuadernos?', description: 'Pierdes tiempo y dinero por errores manuales.' },
  { icon: TrendingDown, title: '¿Pierdes ventas por no tener catálogo online?', description: 'Tus clientes te buscan en internet y no te encuentran.' },
  { icon: LineChart, title: '¿Tu negocio crece pero tu control no?', description: 'Necesitas procesos que escalen contigo, no contra ti.' }
]

function ProblemsSection() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section
      ref={ref}
      className={`section ${isVisible ? styles.visible : styles.hidden}`}
    >
      <div className="container">
        <SectionTitle
          eyebrow="¿Te suena familiar?"
          title="Problemas que resolvemos todos los días"
        />
        <div className={styles.grid}>
          {problems.map((item, index) => (
            <Card
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProblemsSection