import { useEffect, useState, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, X } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { primaryStack, gameDevStack, exploringStack } from '@/constants/Stacks'
import { KW, TY, FN, ST, CM, AN, PL, Line } from '@/components/ui/Code'
import { EASE, editorLineReveal, viewport } from '@/lib/motion'
import type { IconButtonProps } from '@/types/IconButton'

type Tech = IconButtonProps
type CodeLine = { content?: ReactNode; wrap?: boolean }

const STACK_GROUPS = [
  { name: 'daily', items: primaryStack, perLine: 3 },
  { name: 'games', items: gameDevStack, perLine: 4 },
  { name: 'learning', items: exploringStack, perLine: 4 },
]

const chunk = <T,>(items: T[], size: number) =>
  Array.from({ length: Math.ceil(items.length / size) }, (_, i) =>
    items.slice(i * size, i * size + size)
  )

// A string literal in stack.ts that opens the technology dialog
const TechToken = ({ item, onSelect }: { item: Tech; onSelect: (item: Tech) => void }) => (
  <button
    type="button"
    onClick={() => onSelect(item)}
    title={`Where I used ${item.name}`}
    className="text-syn-str decoration-syn-str/40 hover:bg-ice-soft hover:text-ice hover:decoration-ice cursor-pointer underline decoration-dotted underline-offset-4 transition-colors"
  >
    "{item.name}"
  </button>
)

const aboutLines: CodeLine[] = [
  {
    content: (
      <span className="bg-ink text-bg px-1.5 py-0.5 font-semibold tracking-wide"># LUKÁŠ ERL</span>
    ),
  },
  {},
  {
    wrap: true,
    content: (
      <>
        <KW>&gt; </KW>
        <AN>NightmarePog on most of the internet.</AN>
      </>
    ),
  },
  {
    wrap: true,
    content: (
      <>
        <KW>&gt; </KW>
        <AN>19, still in school.</AN>
      </>
    ),
  },
  {},
  {
    wrap: true,
    content: (
      <span className="text-ink-muted">
        Most of my time goes into full-stack web apps and multiplayer Roblox games written in
        TypeScript. On the side I play security competitions and made the national finals of
        Kybersoutěž and HAXAGON Skirmish in 2026.
      </span>
    ),
  },
  {},
  {
    wrap: true,
    content: (
      <span className="text-ink-muted">
        Right now I'm building <PL>**</PL>
        <span className="text-syn-kw font-semibold">Generic Train Game</span>
        <PL>**</PL>, a Roblox railway game with drivable trains, signals and passengers, written in
        roblox-ts with Flamework.
      </span>
    ),
  },
  {},
  { content: <KW>## now</KW> },
  ...[
    { done: true, text: 'national finals, Kybersoutěž + HAXAGON Skirmish' },
    { done: true, text: 'first library on Maven Central (Kord Annotations)' },
    { done: false, text: 'ship Generic Train Game' },
    { done: false, text: 'finish Purr' },
  ].map(
    ({ done, text }): CodeLine => ({
      wrap: true,
      content: (
        <>
          <PL>- </PL>
          {done ? (
            <span className="text-syn-str font-semibold">[x]</span>
          ) : (
            <span className="text-syn-punct">[ ]</span>
          )}{' '}
          <span className={done ? 'text-ink-muted' : 'text-ink'}>{text}</span>
        </>
      ),
    })
  ),
]

const stackLines = (onSelect: (item: Tech) => void): CodeLine[] =>
  [
    {
      content: (
        <>
          <KW>import type</KW> <PL>{'{ '}</PL>
          <TY>Tech</TY>
          <PL>{' }'}</PL> <KW>from</KW> <ST>"./me"</ST>
          <PL>;</PL>
        </>
      ),
    },
    {},
    { content: <CM>// click a name to see where I used it</CM> },
    ...STACK_GROUPS.flatMap((group): CodeLine[] => [
      {
        content: (
          <>
            <KW>export const</KW> <FN>{group.name}</FN>
            <PL>: </PL>
            <TY>Tech</TY>
            <PL>[] = [</PL>
          </>
        ),
      },
      ...chunk(group.items, group.perLine).map((row) => ({
        content: (
          <span className="pl-5">
            {row.map((item) => (
              <span key={item.name}>
                <TechToken item={item} onSelect={onSelect} />
                <PL>, </PL>
              </span>
            ))}
          </span>
        ),
      })),
      { content: <PL>];</PL> },
      {},
    ]),
  ].slice(0, -1)

const lineIn = {
  visible: { transition: { staggerChildren: 0.035, delayChildren: 0.2 } },
}

const Pane = ({
  filename,
  language,
  lines,
  cursor = false,
}: {
  filename: string
  language: string
  lines: CodeLine[]
  cursor?: boolean
}) => (
  <div className="min-w-0">
    <div className="border-line bg-surface flex h-9 items-stretch justify-between border-b">
      <div className="border-line bg-editor -mb-px flex items-center gap-2 border-r px-4">
        <span className="bg-ice size-1.5 rounded-full" />
        <span className="text-ink-muted font-mono text-xs">{filename}</span>
      </div>
      <span className="text-ink-faint flex items-center px-4 font-mono text-[10px] tracking-[0.15em] uppercase">
        {language}
      </span>
    </div>
    <motion.div
      className="overflow-x-auto py-4"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={lineIn}
    >
      {lines.map((line, i) => (
        <motion.div key={i} variants={editorLineReveal}>
          <Line n={i + 1} wrap={line.wrap}>
            {line.content}
            {cursor && i === lines.length - 1 && (
              <motion.span
                className="bg-ink ml-1 inline-block h-[1.1em] w-[7px] align-middle"
                animate={{ opacity: [1, 1, 0, 0] }}
                transition={{ repeat: Infinity, duration: 1, times: [0, 0.5, 0.5, 1] }}
              />
            )}
          </Line>
        </motion.div>
      ))}
    </motion.div>
  </div>
)

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
      <section id="about" className="px-6 pt-20 pb-28 md:pt-28 md:pb-36">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="About" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, ease: EASE }}
            className="border-line-strong bg-editor overflow-hidden border shadow-[0_24px_60px_-12px_rgba(0,0,0,0.8)]"
          >
            <div className="border-line bg-surface flex h-10 items-center gap-3 border-b px-4">
              <div className="flex gap-1.5">
                <span className="border-line-strong size-2.5 rounded-full border" />
                <span className="border-line-strong size-2.5 rounded-full border" />
                <span className="border-line-strong size-2.5 rounded-full border" />
              </div>
              <span className="text-ink-faint mx-auto pr-12 font-mono text-[11px]">
                ~/nightmarepog/about
              </span>
            </div>

            <div className="divide-line grid divide-y lg:grid-cols-[1.2fr_1fr] lg:divide-x lg:divide-y-0">
              <Pane filename="about.md" language="Markdown" lines={aboutLines} />
              <Pane
                filename="stack.ts"
                language="TypeScript"
                lines={stackLines(setSelectedTech)}
                cursor
              />
            </div>

            <div className="border-line bg-surface text-ink-faint flex h-7 items-center justify-between border-t px-4 font-mono text-[10px]">
              <div className="flex items-center gap-3">
                <span className="text-ice">⎇ main*</span>
                <span>UTF-8</span>
              </div>
              <span>2 files · 0 problems</span>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedTech && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex cursor-pointer items-end justify-center bg-black/80 p-4 backdrop-blur-sm sm:items-center"
            onClick={() => setSelectedTech(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="technology-dialog-title"
              aria-describedby="technology-dialog-description"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.35, ease: EASE }}
              onClick={(event) => event.stopPropagation()}
              className="border-line-strong bg-surface w-full max-w-lg cursor-default border p-6 md:p-8"
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <selectedTech.icon className="text-ice size-6" />
                  <h3
                    id="technology-dialog-title"
                    className="font-wide text-ink text-xl font-bold tracking-tight uppercase"
                  >
                    {selectedTech.name}
                  </h3>
                </div>
                <button
                  type="button"
                  autoFocus
                  aria-label="Close"
                  onClick={() => setSelectedTech(null)}
                  className="text-ink-faint hover:text-ink -m-2 cursor-pointer p-2 transition-colors"
                >
                  <X className="size-4" />
                </button>
              </div>

              <p id="technology-dialog-description" className="text-ink-muted leading-relaxed">
                {selectedTech.description}
              </p>

              <p className="text-ink-faint mt-8 mb-2 font-mono text-[11px] tracking-[0.2em] uppercase">
                Used in
              </p>
              <ul className="border-line border-t">
                {selectedTech.projects.map((project) => (
                  <li key={project.name} className="border-line border-b">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group text-ink-muted hover:text-ink flex items-center justify-between py-2.5 text-sm transition-colors"
                      >
                        {project.name}
                        <ArrowUpRight className="group-hover:text-ice size-3.5 transition-colors" />
                      </a>
                    ) : (
                      <span className="text-ink-muted block py-2.5 text-sm">{project.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
