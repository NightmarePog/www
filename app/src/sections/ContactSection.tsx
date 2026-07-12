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
  {
    Icon: SiLinkedin,
    href: 'https://www.linkedin.com/in/luk%C3%A1%C5%A1-erl-7011102a6/',
    label: 'LinkedIn',
  },
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
    <section id="contact" className="border-line border-t px-6 pt-28">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading eyebrow="// contact" title="Let's build something" align="center" />

        <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={stagger}>
          <motion.p variants={fadeUp} className="text-ink-muted mb-10 text-lg leading-relaxed">
            Open to internships, collaborations, and interesting projects. The fastest way to reach
            me is email.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href={`mailto:${EMAIL}`}
              className="bg-ink text-bg rounded-md px-6 py-3 text-sm font-medium transition-colors hover:bg-white"
            >
              {EMAIL}
            </a>
            <button
              onClick={copyEmail}
              className="border-line-strong text-ink-muted hover:border-ice-line hover:text-ice inline-flex cursor-pointer items-center gap-2 rounded-md border px-4 py-3 font-mono text-xs transition-colors"
            >
              {copied ? <Check className="text-ice size-3.5" /> : <Copy className="size-3.5" />}
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

      <footer className="border-line mx-auto mt-24 flex max-w-6xl flex-col items-center justify-between gap-3 border-t py-8 sm:flex-row">
        <p className="text-ink-faint font-mono text-[11px]">
          © {new Date().getFullYear()} Lukáš Erl - built with React + Vite
        </p>
        <p className="text-ink-faint font-mono text-[11px] tracking-[0.2em]">
          {'// signal over noise'}
        </p>
      </footer>
    </section>
  )
}
