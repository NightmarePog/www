import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Blocks,
  CalendarDays,
  Cpu,
  GraduationCap,
  PackageOpen,
  TrainFront,
} from 'lucide-react'
import { fadeUp } from '@/lib/motion'

export interface ProjectData {
  name: string
  description: string
  link: string
  icon: 'framework' | 'education' | 'scheduling' | 'railway' | 'inventory' | 'cpu'
  status: 'Released' | 'Completed' | 'In development' | 'Unfinished' | 'Learning project'
  version?: string
  tags: string[]
  features: string[]
}

const PROJECT_ICONS = {
  framework: Blocks,
  education: GraduationCap,
  scheduling: CalendarDays,
  railway: TrainFront,
  inventory: PackageOpen,
  cpu: Cpu,
}

const STATUS_STYLES: Record<ProjectData['status'], string> = {
  Released: 'border-ice-line bg-ice-soft text-ice',
  Completed: 'border-line-strong bg-surface-2 text-ink-muted',
  'In development': 'border-ice-line bg-ice-soft text-ice',
  Unfinished: 'border-line bg-bg text-ink-faint',
  'Learning project': 'border-line bg-bg text-ink-faint',
}

const Tag = ({ children }: { children: string }) => (
  <span className="text-ink-muted border-line rounded-sm border px-2 py-1 font-mono text-[10px] tracking-[0.15em] uppercase">
    {children}
  </span>
)

export const ProjectCard = ({
  project,
  featured = false,
}: {
  project: ProjectData
  featured?: boolean
}) => {
  const Icon = PROJECT_ICONS[project.icon]

  return (
    <motion.a
      variants={fadeUp}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group border-line bg-surface hover:border-line-strong relative flex flex-col overflow-hidden rounded-lg border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] ${featured ? 'md:grid md:grid-cols-[1.15fr_1fr]' : ''}`}
    >
      <div
        className={`border-line bg-surface-2 relative flex min-h-44 items-center justify-center overflow-hidden ${featured ? 'border-b md:min-h-72 md:border-r md:border-b-0' : 'border-b'}`}
      >
        <div className="bg-ice-soft absolute size-40 rounded-full blur-3xl transition-transform duration-500 group-hover:scale-125" />
        <div className="absolute top-4 right-4 left-4 flex items-center justify-between gap-3">
          <span
            className={`rounded-full border px-2.5 py-1 font-mono text-[9px] tracking-[0.14em] uppercase ${STATUS_STYLES[project.status]}`}
          >
            {project.status}
          </span>
          {project.version && (
            <span className="border-line bg-bg/70 text-ink-muted rounded-full border px-2.5 py-1 font-mono text-[9px] tracking-[0.14em] uppercase backdrop-blur-sm">
              {project.version}
            </span>
          )}
        </div>
        <Icon
          aria-hidden
          strokeWidth={1.15}
          className={`text-ink-muted group-hover:text-ice relative transition-all duration-300 group-hover:-translate-y-1 ${featured ? 'size-24 md:size-32' : 'size-20'}`}
        />
        <span className="text-ink-faint absolute right-4 bottom-3 font-mono text-[9px] tracking-[0.2em] uppercase">
          {project.tags[0]}
        </span>
      </div>

      <div className={`flex flex-col p-6 ${featured ? 'justify-center md:p-8' : ''}`}>
        <div className="mb-3 flex items-start justify-between gap-3">
          <h3
            className={`text-ink font-semibold tracking-tight ${featured ? 'text-2xl' : 'text-lg'}`}
          >
            {project.name}
          </h3>
          <ArrowUpRight className="text-ink-faint group-hover:text-ice mt-1 size-4 shrink-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>

        <p className="text-ink-muted mb-5 text-sm leading-relaxed">{project.description}</p>

        <ul className="mb-6 space-y-1.5">
          {(featured ? project.features : project.features.slice(0, 2)).map((f) => (
            <li key={f} className="text-ink-muted flex items-center gap-2.5 text-sm">
              <span className="bg-ice size-1 shrink-0 rounded-full" />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>
    </motion.a>
  )
}
