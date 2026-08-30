import { motion } from 'framer-motion'
import { Trophy } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { primaryStack, gameDevStack, exploringStack } from '@/constants/Stacks'
import highlights from '@/constants/Highlights'
import { fadeUp, stagger, viewport } from '@/lib/motion'
import type { IconButtonProps } from '@/types/IconButton'

const STACK_GROUPS = [
  { label: 'stack.primary', items: primaryStack },
  { label: 'stack.gamedev', items: gameDevStack },
  { label: 'stack.exploring', items: exploringStack },
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
            I'm Lukáš Erl, also known online as{' '}
            <span className="text-ink font-medium">NightmarePog</span>. A 19-year-old student at
            SOŠE Hluboká nad Vltavou, Czech Republic.
          </motion.p>
          <motion.p variants={fadeUp} className="text-ink-muted mb-5 text-lg leading-relaxed">
            I work across web and game development, with a recent focus on Kotlin tooling and Linux
            systems. I built <span className="text-ink font-medium">Kord Annotations</span>, a
            compile-time command framework with KSP code generation, Gradle integration, and Spring
            Boot support.
          </motion.p>
          <motion.p variants={fadeUp} className="text-ink-muted mb-8 text-lg leading-relaxed">
            I learn by shipping projects, documenting decisions, and working through real technical
            constraints with a team.
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
