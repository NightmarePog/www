import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Copy } from 'lucide-react'
import { SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { fadeUp, stagger, viewport } from '@/lib/motion'

const EMAIL = 'erllukas07@gmail.com'

const SOCIALS = [
  { Icon: SiGithub, href: 'https://github.com/NightmarePog', label: 'GitHub' },
  { Icon: SiInstagram, href: 'https://www.instagram.com/nightmarepog/', label: 'Instagram' },
  { Icon: SiLinkedin, href: 'https://www.linkedin.com/in/luk%C3%A1%C5%A1-erl-7011102a6/', label: 'LinkedIn' },
]

export const ContactSection = () => {
  const [copied, setCopied] = useState(false)

  const copyEmail = async (e: React.MouseEvent) => {
    e.preventDefault()
    await navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="pt-28 px-6 border-t border-line">
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeading eyebrow="// contact" title="Let's build something" align="center" />

        <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={stagger}>
          <motion.p variants={fadeUp} className="text-lg text-ink-muted leading-relaxed mb-10">
            Open to internships, collaborations, and interesting projects.
            The fastest way to reach me is email.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href={`mailto:${EMAIL}`}
              className="px-6 py-3 rounded-md bg-ink text-bg font-medium text-sm hover:bg-white transition-colors"
            >
              {EMAIL}
            </a>
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-md border border-line-strong font-mono text-xs text-ink-muted hover:border-ice-line hover:text-ice transition-colors cursor-pointer"
            >
              {copied ? <Check className="size-3.5 text-ice" /> : <Copy className="size-3.5" />}
              {copied ? 'copied' : 'copy'}
            </button>
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-center justify-center gap-6">
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
      </div>

      <footer className="max-w-6xl mx-auto mt-24 py-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-[11px] text-ink-faint">
          © {new Date().getFullYear()} Lukáš Erl — built with React + Vite
        </p>
        <p className="font-mono text-[11px] text-ink-faint tracking-[0.2em]">
          {'// signal over noise'}
        </p>
      </footer>
    </section>
  )
}
