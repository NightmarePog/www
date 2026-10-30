import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Prompt, Terminal } from '@/components/ui/Terminal'
import { LOG, type LogEntry } from '@/constants/Experience'
import { EASE, viewport } from '@/lib/motion'

const LANES = {
  work: {
    x: 'left-[11px]',
    label: 'work',
    line: 'bg-syn-str',
    text: 'text-syn-str',
    border: 'border-syn-str',
  },
  competition: {
    x: 'left-[43px]',
    label: 'competitions',
    line: 'bg-syn-kw',
    text: 'text-syn-kw',
    border: 'border-syn-kw',
  },
} as const

const rowIn = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } },
}

const Commit = ({ entry }: { entry: LogEntry }) => {
  const lane = LANES[entry.lane]
  const Wrapper = entry.link ? motion.a : motion.div

  return (
    <li className="group relative pl-20">
      {/* commit node on its lane */}
      <span
        className={`bg-editor absolute top-7 ${lane.x} size-[11px] -translate-x-1/2 rounded-full border-2 ${lane.border} transition-transform duration-300 group-hover:scale-150`}
      />
      {/* dotted connector from node to card */}
      <span
        className={`border-line-strong absolute top-[33px] ${entry.lane === 'work' ? 'left-[17px] w-[63px]' : 'left-[49px] w-[31px]'} border-t border-dotted`}
      />

      <Wrapper
        variants={rowIn}
        {...(entry.link ? { href: entry.link, target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="border-line bg-surface/60 group-hover:border-line-strong relative block overflow-hidden border p-5 transition-colors md:p-6"
      >
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
          <span className="text-syn-type">{entry.hash}</span>
          <span
            className={`border px-1.5 text-[10px] tracking-[0.15em] uppercase ${lane.border} ${lane.text}`}
          >
            {lane.label}
          </span>
          <span className="text-ink-faint ml-auto">{entry.date}</span>
        </div>

        <div className="mt-4 flex items-end justify-between gap-6">
          <div className="min-w-0">
            <h3 className="font-wide text-ink font-sans text-xl font-bold tracking-tight uppercase md:text-2xl">
              {entry.title}
            </h3>
            <p className="text-ink-muted mt-1 flex items-center gap-1.5 font-sans">
              {entry.subtitle}
              {entry.link && (
                <ArrowUpRight className="group-hover:text-ice size-3.5 transition-[color,translate] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              )}
            </p>
            {entry.details && (
              <p className="text-ink-muted mt-3 max-w-2xl font-sans text-[15px] leading-relaxed">
                {entry.details}
              </p>
            )}
          </div>

          {/* rubber-stamp badge */}
          <span
            className={`font-wide hidden shrink-0 -rotate-6 border-2 px-3 py-1 text-lg font-extrabold tracking-tight uppercase opacity-80 transition-transform duration-300 group-hover:rotate-0 sm:block ${lane.border} ${lane.text}`}
          >
            {entry.stamp}
          </span>
        </div>
      </Wrapper>
    </li>
  )
}

export const ExperienceSection = () => {
  const graphRef = useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({ target: graphRef, offset: ['start 85%', 'end 60%'] })
  const draw = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  return (
    <section id="experience" className="px-6 py-28 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Experience" />

        <Terminal title="~/experience">
          <Prompt cwd="~/experience">
            <span>git log --graph --all</span>
          </Prompt>

          <div className="mt-5 mb-4 flex items-center gap-2 pl-[3px] text-xs">
            <span className="bg-ice text-bg px-1.5 font-semibold">HEAD</span>
            <span className="text-ink-faint">→</span>
            <span className="text-ice">main</span>
          </div>

          <motion.ol
            ref={graphRef}
            className="relative flex flex-col gap-4 pb-2"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            {/* lanes draw downward as you scroll */}
            {Object.values(LANES).map((lane) => (
              <span key={lane.label} className={`bg-line absolute top-0 bottom-0 ${lane.x} w-px`}>
                <motion.span
                  className={`absolute inset-0 origin-top ${lane.line}`}
                  style={{ scaleY: draw }}
                />
              </span>
            ))}

            {LOG.map((entry) => (
              <Commit key={entry.hash} entry={entry} />
            ))}
          </motion.ol>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-ink text-bg px-1.5 font-semibold">(END)</span>
            <span className="text-ink-faint flex gap-4 text-[11px]">
              <span className="text-syn-str">● work</span>
              <span className="text-syn-kw">● competitions</span>
            </span>
          </div>
        </Terminal>
      </div>
    </section>
  )
}
