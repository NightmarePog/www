import { Helmet } from 'react-helmet-async'
import { TooltipProvider } from '@/components/ui/tooltip'
import Navbar from './components/ui/Navbar'
import { HeroSection } from './sections/HeroSection'
import { AboutSection } from './sections/AboutSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { ContactSection } from './sections/ContactSection'

export function App() {
  return (
    <TooltipProvider>
      <Helmet>
        <title>Lukáš Erl — Full Stack Developer</title>
        <meta
          name="description"
          content="Portfolio of Lukáš Erl — full stack developer and game developer based in Czech Republic."
        />
        <meta property="og:title" content="Lukáš Erl — Full Stack Developer" />
        <meta property="og:description" content="Full stack developer and game developer." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Helmet>
      <div className="bg-bg min-h-screen">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </div>
    </TooltipProvider>
  )
}
