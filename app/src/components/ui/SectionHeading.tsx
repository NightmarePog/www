import { motion } from 'framer-motion'
import { drawLine, maskUp, viewport } from '@/lib/motion'

interface SectionHeadingProps {
  title: string
  aside?: string
}

export const SectionHeading = ({ title, aside }: SectionHeadingProps) => (
  <motion.header
    className="mb-16 md:mb-20"
    initial="hidden"
    whileInView="visible"
    viewport={viewport}
    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
  >
    <motion.div variants={drawLine} className="bg-line-strong mb-6 h-px origin-left" />
    <div className="flex items-end justify-between gap-6">
      <div className="flex items-baseline gap-5">
        <span className="block overflow-hidden pb-1">
          <motion.h2
            variants={maskUp}
            className="font-wide text-ink text-4xl leading-none font-bold tracking-tight uppercase md:text-6xl"
          >
            {title}
          </motion.h2>
        </span>
      </div>
      {aside && (
        <span className="hidden overflow-hidden pb-1 md:block">
          <motion.p variants={maskUp} className="text-ink-faint font-mono text-xs">
            {aside}
          </motion.p>
        </span>
      )}
    </div>
  </motion.header>
)
