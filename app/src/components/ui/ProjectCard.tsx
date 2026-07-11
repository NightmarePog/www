import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { fadeUp } from '@/lib/motion'

export interface ProjectData {
  name: string
  description: string
  link: string
  image: string
  tags: string[]
  features: string[]
}

const Tag = ({ children }: { children: string }) => (
  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-muted border border-line rounded-sm px-2 py-1">
    {children}
  </span>
)

export const ProjectCard = ({ project, featured = false }: { project: ProjectData; featured?: boolean }) => (
  <motion.a
    variants={fadeUp}
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className={`group relative flex flex-col overflow-hidden rounded-lg border border-line bg-surface
      hover:border-line-strong hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)]
      transition-all duration-300 ${featured ? 'md:grid md:grid-cols-[1.15fr_1fr]' : ''}`}
  >
    <div className={`overflow-hidden border-line ${featured ? 'md:border-r border-b md:border-b-0' : 'border-b'}`}>
      <img
        src={project.image}
        alt={project.name}
        loading="lazy"
        className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
      />
    </div>

    <div className={`flex flex-col p-6 ${featured ? 'md:p-8 justify-center' : ''}`}>
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className={`font-semibold tracking-tight text-ink ${featured ? 'text-2xl' : 'text-lg'}`}>
          {project.name}
        </h3>
        <ArrowUpRight className="size-4 shrink-0 mt-1 text-ink-faint group-hover:text-ice group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
      </div>

      <p className="text-sm text-ink-muted leading-relaxed mb-5">{project.description}</p>

      {featured && (
        <ul className="mb-6 space-y-1.5">
          {project.features.map((f) => (
            <li key={f} className="flex items-center gap-2.5 text-sm text-ink-muted">
              <span className="size-1 bg-ice rounded-full shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </div>
  </motion.a>
)
