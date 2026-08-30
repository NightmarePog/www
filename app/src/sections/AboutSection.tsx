import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Trophy, X } from 'lucide-react'
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

const TechChip = ({
  item,
  selected,
  onSelect,
}: {
  item: IconButtonProps
  selected: boolean
  onSelect: (item: IconButtonProps) => void
}) => {
  const Icon = item.icon
  return (
    <button
      type="button"
      aria-pressed={selected}
      title={`Show projects made with ${item.name}`}
      onClick={() => onSelect(item)}
      className={`group inline-flex items-center gap-2 rounded-md border px-3 py-1.5 transition-all duration-200 hover:-translate-y-0.5 ${
        selected
          ? 'border-ice-line bg-ice-soft text-ice'
          : 'border-line bg-surface-2 hover:border-line-strong'
      }`}
    >
      <Icon
        className={`size-4 transition-colors ${selected ? 'text-ice' : 'text-ink-muted group-hover:text-ink'}`}
      />
      <span
        className={`font-mono text-xs transition-colors ${selected ? 'text-ice' : 'text-ink-muted group-hover:text-ink'}`}
      >
        {item.name}
      </span>
    </button>
  )
}

export const AboutSection = () => {
  const [selectedTech, setSelectedTech] = useState<IconButtonProps | null>(null)

  return (
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
              I work across web and game development, with a recent focus on Kotlin tooling and
              Linux systems. I built <span className="text-ink font-medium">Kord Annotations</span>,
              a compile-time command framework with KSP code generation, Gradle integration, and
              Spring Boot support.
            </motion.p>
            <motion.p variants={fadeUp} className="text-ink-muted mb-8 text-lg leading-relaxed">
              I learn by shipping projects, documenting decisions, and working through real
              technical constraints with a team.
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
                    <TechChip
                      key={item.name}
                      item={item}
                      selected={selectedTech?.name === item.name}
                      onSelect={setSelectedTech}
                    />
                  ))}
                </div>
              </motion.div>
            ))}

            <motion.div
              variants={fadeUp}
              aria-live="polite"
              className="border-ice-line bg-ice-soft min-h-40 rounded-lg border p-5"
            >
              {selectedTech ? (
                <>
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <selectedTech.icon className="text-ice size-5" />
                      <h3 className="text-ink font-semibold">{selectedTech.name}</h3>
                    </div>
                    <button
                      type="button"
                      aria-label="Close technology details"
                      onClick={() => setSelectedTech(null)}
                      className="text-ink-faint hover:text-ink rounded-sm p-1 transition-colors"
                    >
                      <X className="size-4" />
                    </button>
                  </div>
                  <p className="text-ink-muted text-sm leading-relaxed">
                    {selectedTech.description}
                  </p>
                  <p className="text-ink-faint mt-5 mb-2 font-mono text-[10px] tracking-[0.2em] uppercase">
                    Projects made with it
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedTech.projects.map((project) =>
                      project.link ? (
                        <a
                          key={project.name}
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border-line bg-surface text-ink-muted hover:border-line-strong hover:text-ice inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs transition-colors"
                        >
                          {project.name}
                          <ArrowUpRight className="size-3" />
                        </a>
                      ) : (
                        <span
                          key={project.name}
                          className="border-line bg-surface text-ink-muted rounded-md border px-3 py-1.5 text-xs"
                        >
                          {project.name}
                        </span>
                      )
                    )}
                  </div>
                </>
              ) : (
                <div className="flex min-h-28 items-center justify-center text-center">
                  <p className="text-ink-muted max-w-sm text-sm leading-relaxed">
                    Select a technology to see how I use it and which projects I built with it.
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
