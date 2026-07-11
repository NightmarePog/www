import { motion } from 'framer-motion'
import { EASE, viewport } from '@/lib/motion'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  align?: 'left' | 'center'
}

export const SectionHeading = ({ eyebrow, title, align = 'left' }: SectionHeadingProps) => (
  <motion.div
    className={`mb-14 ${align === 'center' ? 'text-center' : ''}`}
    initial="hidden"
    whileInView="visible"
    viewport={viewport}
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: 0.12 } },
    }}
  >
    <motion.p
      className="font-mono text-xs tracking-[0.2em] text-ink-faint mb-4"
      variants={{
        hidden: { opacity: 0, y: 12 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
      }}
    >
      {eyebrow}
    </motion.p>
    <motion.h2
      className="text-3xl md:text-4xl font-semibold tracking-tight text-ink uppercase"
      variants={{
        hidden: { opacity: 0, y: 12 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
      }}
    >
      {title}
    </motion.h2>
    <motion.div
      className={`h-px w-16 bg-ink/40 mt-6 ${align === 'center' ? 'mx-auto' : ''}`}
      style={{ originX: align === 'center' ? 0.5 : 0 }}
      variants={{
        hidden: { scaleX: 0 },
        visible: { scaleX: 1, transition: { duration: 0.7, ease: EASE } },
      }}
    />
  </motion.div>
)
