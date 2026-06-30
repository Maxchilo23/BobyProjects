import { useState } from 'react'
import SectionTitle from '../../ui/SectionTitle/SectionTitle'
import { faq } from '../../../data/faq'
import styles from './FaqSection.module.css'

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section">
      <div className="container">
        <SectionTitle eyebrow="Dudas frecuentes" title="Preguntas y respuestas" />
        <div className={styles.list}>
          {faq.map((item, index) => (
            <div key={index} className={styles.item}>
              <button className={styles.question} onClick={() => toggle(index)}>
                {item.question}
                <span>{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <p className={styles.answer}>{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FaqSection