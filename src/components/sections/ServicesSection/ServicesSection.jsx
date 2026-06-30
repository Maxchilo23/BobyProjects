import { ShoppingCart, Globe, ClipboardList, Receipt } from 'lucide-react'
import Card from '../../ui/Card/Card'
import SectionTitle from '../../ui/SectionTitle/SectionTitle'
import styles from './ServicesSection.module.css'

const services = [
  { id: 1, icon: ShoppingCart, title: 'Punto de venta', description: 'Sistemas de ventas e inventario para que controles tu negocio en tiempo real.' },
  { id: 2, icon: Globe, title: 'Tiendas online', description: 'Páginas web con catálogo, carrito y checkout por WhatsApp para vender sin complicaciones.' },
  { id: 3, icon: ClipboardList, title: 'Sistemas de gestión', description: 'Reservas, citas, tickets de soporte: automatiza procesos internos de tu empresa.' },
  { id: 4, icon: Receipt, title: 'Facturación electrónica', description: 'Integraciones para emitir comprobantes electrónicos sin dolores de cabeza.' }
]

function ServicesSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Lo que hacemos"
          title="Soluciones a tu medida"
          subtitle="No vendemos tecnología, resolvemos problemas concretos de tu negocio."
        />
        <div className={styles.grid}>
          {services.map((service) => (
            <Card key={service.id} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection