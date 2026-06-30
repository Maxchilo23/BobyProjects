import Hero from '../components/sections/Hero/Hero'
import ProblemsSection from '../components/sections/ProblemsSection/ProblemsSection'
import ServicesSection from '../components/sections/ServicesSection/ServicesSection'
import PortfolioSection from '../components/sections/PortfolioSection/PortfolioSection'
import ProcessSection from '../components/sections/ProcessSection/ProcessSection'
import AboutSection from '../components/sections/AboutSection/AboutSection'
import FaqSection from '../components/sections/FaqSection/FaqSection'
import ContactSection from '../components/sections/ContactSection/ContactSection'

function Home() {
  return (
    <>
      <Hero />
      <ProblemsSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <AboutSection />
      <FaqSection />
      <ContactSection />
    </>
  )
}

export default Home