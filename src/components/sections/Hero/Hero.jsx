import { useEffect, useRef } from 'react'
import Button from '../../ui/Button/Button'
import styles from './Hero.module.css'


function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width, height
    let nodes = []
    const mouse = { x: null, y: null }

    function resize() {
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
      const count = Math.floor((width * height) / 18000)
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3
      }))
    }

    function draw() {
      ctx.clearRect(0, 0, width, height)
      nodes.forEach((n) => {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1

        if (mouse.x !== null) {
          const dx = mouse.x - n.x
          const dy = mouse.y - n.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            n.x -= dx * 0.01
            n.y -= dy * 0.01
          }
        }
      })

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < 130) {
            ctx.strokeStyle = `rgba(91, 95, 239, ${1 - dist / 130})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      nodes.forEach((n) => {
        ctx.fillStyle = '#5B5FEF'
        ctx.beginPath()
        ctx.arc(n.x, n.y, 2, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(draw)
    }

    const handleMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    canvas.addEventListener('mousemove', handleMove)
    canvas.addEventListener('mouseleave', () => { mouse.x = null; mouse.y = null })

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section className={styles.hero}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={`container ${styles.inner}`}>
        <span className={styles.eyebrow}>Software para PYMEs</span>
        <h1 className={styles.title}>
          Conecta tu negocio. <br />Deja el cuaderno atrás.
        </h1>
        <p className={styles.subtitle}>
          Sistemas de ventas, inventario, reservas y tiendas online hechos a la medida de tu empresa.
        </p>
        <div className={styles.actions}>
          <Button href="https://wa.me/51955429147" variant="accent">Hablemos por WhatsApp</Button>
          <Button href="/portafolio" variant="outline-light">Ver portafolio</Button>
        </div>
      </div>
    </section>
  )
}

export default Hero