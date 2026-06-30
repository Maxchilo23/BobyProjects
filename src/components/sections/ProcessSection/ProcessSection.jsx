import SectionTitle from '../../ui/SectionTitle/SectionTitle'
import styles from './ProcessSection.module.css'

const steps = [
  { number: '01', title: 'Contacto', description: 'Me cuentas tu idea o problema por WhatsApp.' },
  { number: '02', title: 'Diagnóstico', description: 'Analizamos juntos qué solución se ajusta a tu negocio.' },
  { number: '03', title: 'Desarrollo', description: 'Construyo tu sistema con avances que puedes revisar.' },
  { number: '04', title: 'Entrega y soporte', description: 'Lanzamos tu sistema y te acompaño después.' }
]

function ProcessSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Cómo trabajamos"
          title="Un proceso simple y transparente"
        />
        <div className={styles.grid}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <span className={styles.number}>{step.number}</span>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.description}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection