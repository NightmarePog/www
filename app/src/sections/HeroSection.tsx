import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si'
import { KW, TY, VA, NU, ST, PL, Line, EmptyLine } from '@/components/ui/Code'
import { EditorWindow } from '@/components/ui/EditorWindow'
import { AnimatedLabel } from '@/components/ui/AnimatedLabel'
import { EASE, editorLineReveal } from '@/lib/motion'

const SOCIALS = [
  { Icon: SiGithub, href: 'https://github.com/NightmarePog', label: 'GitHub' },
  { Icon: SiInstagram, href: 'https://www.instagram.com/nightmarepog/', label: 'Instagram' },
  { Icon: SiLinkedin, href: 'https://www.linkedin.com/in/luk%C3%A1%C5%A1-erl-7011102a6/', label: 'LinkedIn' },
]

const introStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}

const introItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

const CodeLine = ({ children }: { children: React.ReactNode }) => (
  <motion.div variants={editorLineReveal}>{children}</motion.div>
)

export const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center overflow-hidden px-6 pt-28 pb-20">
    {/* faint vignette */}
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none"
      style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(255,255,255,0.035), transparent 70%)' }}
    />

    <div className="relative w-full max-w-6xl mx-auto grid lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-16 items-center">
      {/* intro */}
      <motion.div initial="hidden" animate="visible" variants={introStagger}>
        <motion.p
          variants={introItem}
          className="font-mono text-[11px] uppercase tracking-[0.35em] text-ink-faint mb-6"
        >
          Hello, world — I'm
        </motion.p>
        <motion.h1
          variants={introItem}
          className="text-5xl md:text-7xl font-semibold tracking-tight text-ink mb-6"
        >
          Lukáš Erl
        </motion.h1>
        <motion.p variants={introItem} className="font-mono text-base md:text-lg mb-6 text-ink-muted">
          <span className="text-ink-faint">const role = "</span>
          <AnimatedLabel className="text-base md:text-lg" />
          <span className="text-ink-faint">"</span>
        </motion.p>
        <motion.p variants={introItem} className="text-lg text-ink-muted leading-relaxed max-w-md mb-10">
          I build full-stack web apps, games, and low-level experiments
          in C and C++.
        </motion.p>

        <motion.div variants={introItem} className="flex flex-wrap items-center gap-4 mb-10">
          <motion.a
            href="#projects"
            className="px-6 py-3 rounded-md bg-ink text-bg font-medium text-sm hover:bg-white transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            View projects
          </motion.a>
          <motion.a
            href="#contact"
            className="px-6 py-3 rounded-md border border-line-strong text-ink font-medium text-sm hover:border-ice-line hover:text-ice transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Get in touch
          </motion.a>
        </motion.div>

        <motion.div variants={introItem} className="flex items-center gap-5">
          {SOCIALS.map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-ink-faint hover:text-ice transition-colors"
              whileHover={{ y: -2 }}
            >
              <Icon className="size-5" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* editor window */}
      <EditorWindow filename="portfolio.ts" lineCount={7}>
        <CodeLine>
          <Line n={1}>
            <KW>const</KW> <VA>name</VA><PL>: </PL><TY>string</TY> <PL>= </PL><ST>"Lukáš Erl"</ST><PL>;</PL>
          </Line>
        </CodeLine>
        <CodeLine>
          <Line n={2}>
            <KW>const</KW> <VA>age</VA> <PL>= </PL><NU>19</NU><PL>;</PL>
          </Line>
        </CodeLine>
        <CodeLine>
          <Line n={3}>
            <KW>const</KW> <VA>base</VA> <PL>= </PL><ST>"Czech Republic"</ST><PL>;</PL>
          </Line>
        </CodeLine>
        <CodeLine><EmptyLine n={4} /></CodeLine>
        <CodeLine>
          <Line n={5}>
            <KW>const</KW> <VA>focus</VA> <PL>= [</PL><ST>"fullstack"</ST><PL>, </PL><ST>"gamedev"</ST><PL>, </PL><ST>"security"</ST><PL>];</PL>
          </Line>
        </CodeLine>
        <CodeLine><EmptyLine n={6} /></CodeLine>
        <CodeLine>
          <Line n={7}>
            <KW>export default</KW> <PL>{'{ '}</PL><VA>name</VA><PL>, </PL><VA>age</VA><PL>, </PL><VA>focus</VA><PL>{' };'}</PL>
            <motion.span
              className="inline-block w-[7px] h-[1.1em] bg-ink align-middle ml-1"
              animate={{ opacity: [1, 1, 0, 0] }}
              transition={{ repeat: Infinity, duration: 1, times: [0, 0.5, 0.5, 1] }}
            />
          </Line>
        </CodeLine>
      </EditorWindow>
    </div>

    {/* scroll hint */}
    <motion.a
      href="#about"
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-ink-faint hover:text-ice transition-colors"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.6 }}
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.3em]">scroll</span>
      <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}>
        <ChevronDown className="size-4" />
      </motion.div>
    </motion.a>
  </section>
)
