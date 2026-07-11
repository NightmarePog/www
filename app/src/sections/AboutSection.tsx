import { motion } from 'framer-motion'
import { Trophy } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { webStack, gameDevStack, othersStack } from '@/constants/Stacks'
import highlights from '@/constants/Highlights'
import { fadeUp, stagger, viewport } from '@/lib/motion'
import type { IconButtonProps } from '@/types/IconButton'

const STACK_GROUPS = [
  { label: 'stack.web', items: webStack },
  { label: 'stack.gamedev', items: gameDevStack },
  { label: 'stack.tools', items: othersStack },
]

const TechChip = ({ item }: { item: IconButtonProps }) => {
  const Icon = item.icon
  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      title={item.description ?? item.name}
      className="group border-line bg-surface-2 hover:border-line-strong inline-flex items-center gap-2 rounded-md border px-3 py-1.5 transition-all duration-200 hover:-translate-y-0.5"
    >
      <Icon className="text-ink-muted group-hover:text-ink size-4 transition-colors" />
      <span className="text-ink-muted group-hover:text-ink font-mono text-xs transition-colors">
        {item.name}
      </span>
    </a>
  )
}

export const AboutSection = () => (
  <section id="about" className="border-line border-t px-6 py-28">
    <div className="mx-auto max-w-6xl">
      <SectionHeading eyebrow="// about" title="Who I am" />

      <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={stagger}>
          <motion.p variants={fadeUp} className="text-ink-muted mb-5 text-lg leading-relaxed">
            Hey! I'm Lukáš Erl — online as{' '}
            <span className="text-ink font-medium">NightmarePog</span>. A 19-year-old student at
            SOŠE Hluboká nad Vltavou, Czech Republic.
          </motion.p>
          <motion.p variants={fadeUp} className="text-ink-muted mb-5 text-lg leading-relaxed">
            I love full-stack web development and game development, but what really pulls me in is
            language tooling — I built <span className="text-ink font-medium">Laze</span>, a
            statically typed language whose compiler is written in Laze itself.
          </motion.p>
          <motion.p variants={fadeUp} className="text-ink-muted mb-8 text-lg leading-relaxed">
            Lately I've been diving into cybersecurity too. When I'm not coding, I'm probably
            watching a rocket launch — big spaceflight fan.
          </motion.p>

          <div className="flex flex-wrap gap-3">
            {highlights.map((item) => (
              <motion.a
                key={item.name}
                variants={fadeUp}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="border-line bg-surface hover:border-ice-line inline-flex items-center gap-3 rounded-md border px-4 py-3 transition-colors"
              >
                <Trophy className="text-ice size-4 shrink-0" />
                <span className="text-ink text-sm">
                  <span className="font-medium">{item.name}</span>
                  <span className="text-ink-muted"> — {item.highlightDescription}</span>
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
          className="flex flex-col gap-4"
        >
          {STACK_GROUPS.map((group) => (
            <motion.div
              key={group.label}
              variants={fadeUp}
              className="border-line bg-surface rounded-lg border p-5"
            >
              <p className="text-ink-faint mb-4 font-mono text-[11px] tracking-[0.25em] uppercase">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <TechChip key={item.name} item={item} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
)
