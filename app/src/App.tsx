import { Helmet } from 'react-helmet-async'
import { MotionConfig } from 'framer-motion'
import { TooltipProvider } from '@/components/ui/tooltip'
import Navbar from './components/ui/Navbar'
import { HeroSection } from './sections/HeroSection'
import { AboutSection } from './sections/AboutSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { ContactSection } from './sections/ContactSection'

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <TooltipProvider>
        <Helmet>
          <title>Lukáš Erl — Student Developer</title>
          <meta
            name="description"
            content="Portfolio of Lukáš Erl, a student developer building full-stack web apps, Roblox games, and Kotlin tooling."
          />
          <meta property="og:title" content="Lukáš Erl — Student Developer" />
          <meta
            property="og:description"
            content="Full-stack web apps, Roblox games, and Kotlin tooling."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://nightmarepog.dev" />
          <link rel="canonical" href="https://nightmarepog.dev" />
          <meta property="og:image" content="https://nightmarepog.dev/projects/gtg-1.webp" />
          <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
        <div className="bg-bg min-h-screen">
          <Navbar />
          <main>
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <ExperienceSection />
            <ContactSection />
          </main>
        </div>
      </TooltipProvider>
    </MotionConfig>
  )
}
