import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
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
      className={`group inline-flex cursor-pointer items-center gap-2 rounded-md border px-3 py-1.5 transition-all duration-200 hover:-translate-y-0.5 ${
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

  useEffect(() => {
    if (!selectedTech) return

    const previousOverflow = document.body.style.overflow
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedTech(null)
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [selectedTech])

  return (
    <>
      <section id="about" className="border-line border-t px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="// about" title="Who I am" />

          <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={stagger}
            >
              <motion.p variants={fadeUp} className="text-ink-muted mb-5 text-lg leading-relaxed">
                I'm Lukáš Erl, also known online as{' '}
                <span className="text-ink font-medium">NightmarePog</span>. A 19-year-old student at
                SOŠE Hluboká nad Vltavou, Czech Republic.
              </motion.p>
              <motion.p variants={fadeUp} className="text-ink-muted mb-5 text-lg leading-relaxed">
                I work across web and game development, with a recent focus on Kotlin tooling and
                Linux systems. I built{' '}
                <span className="text-ink font-medium">Kord Annotations</span>, a compile-time
                command framework with KSP code generation, Gradle integration, and Spring Boot
                support.
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

              <motion.p
                variants={fadeUp}
                className="text-ink-faint px-1 font-mono text-[10px] tracking-[0.14em]"
              >
                Select a technology to see what I built with it.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedTech && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-[100] flex cursor-pointer items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
            onClick={() => setSelectedTech(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="technology-dialog-title"
              aria-describedby="technology-dialog-description"
              initial={{ opacity: 0, y: 16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
              className="border-line-strong bg-surface w-full max-w-lg cursor-default rounded-xl border p-6 shadow-[0_30px_100px_-30px_rgba(0,0,0,0.95)] md:p-7"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="border-ice-line bg-ice-soft flex size-10 items-center justify-center rounded-lg border">
                    <selectedTech.icon className="text-ice size-5" />
                  </span>
                  <div>
                    <p className="text-ink-faint font-mono text-[9px] tracking-[0.2em] uppercase">
                      Technology
                    </p>
                    <h3 id="technology-dialog-title" className="text-ink text-xl font-semibold">
                      {selectedTech.name}
                    </h3>
                  </div>
                </div>
                <button
                  type="button"
                  autoFocus
                  aria-label="Close technology details"
                  onClick={() => setSelectedTech(null)}
                  className="text-ink-faint hover:bg-surface-2 hover:text-ink cursor-pointer rounded-md p-2 transition-colors"
                >
                  <X className="size-4" />
                </button>
              </div>

              <p id="technology-dialog-description" className="text-ink-muted leading-relaxed">
                {selectedTech.description}
              </p>

              <p className="text-ink-faint mt-6 mb-3 font-mono text-[10px] tracking-[0.2em] uppercase">
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
                      className="border-line bg-surface-2 text-ink-muted hover:border-line-strong hover:text-ice inline-flex cursor-pointer items-center gap-1.5 rounded-md border px-3 py-2 text-sm transition-colors"
                    >
                      {project.name}
                      <ArrowUpRight className="size-3.5" />
                    </a>
                  ) : (
                    <span
                      key={project.name}
                      className="border-line bg-surface-2 text-ink-muted rounded-md border px-3 py-2 text-sm"
                    >
                      {project.name}
                    </span>
                  )
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
