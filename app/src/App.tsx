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
        <meta name="description" content="Portfolio of Lukáš Erl — full stack developer, game developer, and language creator based in Czech Republic." />
        <meta property="og:title" content="Lukáš Erl — Full Stack Developer" />
        <meta property="og:description" content="Full stack developer, game developer, and creator of the Laze programming language." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Helmet>
      <div className="min-h-screen bg-bg">
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
