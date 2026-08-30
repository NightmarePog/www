import { Helmet } from 'react-helmet-async'
import { TooltipProvider } from '@/components/ui/tooltip'
import Navbar from './components/ui/Navbar'
import { HeroSection } from './sections/HeroSection'
import { AboutSection } from './sections/AboutSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { ContactSection } from './sections/ContactSection'

export function App() {
  return (
    <TooltipProvider>
      <Helmet>
        <title>Lukáš Erl — Student Software Developer</title>
        <meta
          name="description"
          content="Portfolio of Lukáš Erl, a student software developer working across web development, Kotlin tooling, and games."
        />
        <meta property="og:title" content="Lukáš Erl — Student Software Developer" />
        <meta
          property="og:description"
          content="Web development, Kotlin tooling, and game development."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nightmarepog.dev" />
        <link rel="canonical" href="https://nightmarepog.dev" />
        <meta name="twitter:card" content="summary" />
      </Helmet>
      <div className="bg-bg min-h-screen">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </div>
    </TooltipProvider>
  )
}
