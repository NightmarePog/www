import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/constants/Projects'
import { EASE, viewport } from '@/lib/motion'

const SPAN: Record<Project['size'], string> = {
  large: 'md:col-span-7',
  small: 'md:col-span-5',
  half: 'md:col-span-6',
}

export const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef<HTMLAnchorElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-3%', '3%'])

  return (
    <motion.a
      ref={ref}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group col-span-12 block self-start ${SPAN[project.size]}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <motion.div
        className={`bg-surface-2 border-line relative aspect-[16/10] overflow-hidden border`}
        variants={{
          hidden: { clipPath: 'inset(100% 0% 0% 0%)' },
          visible: { clipPath: 'inset(0% 0% 0% 0%)', transition: { duration: 1.1, ease: EASE } },
        }}
      >
        <motion.div style={{ y: imageY }} className="absolute inset-0 scale-[1.07]">
          <img
            src={project.image}
            alt={project.imageAlt}
            loading="lazy"
            className="h-full w-full object-cover grayscale-[0.85] transition-[filter,scale] duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
          />
        </motion.div>
        <span className="bg-bg/80 text-ink-muted absolute top-3 left-3 z-10 px-2 py-1 font-mono text-[10px] tracking-[0.15em] uppercase backdrop-blur-sm">
          {project.status}
          {project.version && <span className="text-ink-faint"> · {project.version}</span>}
        </span>
      </motion.div>

      <motion.div
        className="mt-5 grid grid-cols-[auto_1fr_auto] gap-x-4"
        variants={{
          hidden: { opacity: 0, y: 16 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE, delay: 0.25 } },
        }}
      >
        <span className="text-ink-faint pt-1.5 font-mono text-[11px] tabular-nums">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div>
          <h3
            className={`font-wide text-ink group-hover:text-ice font-bold tracking-tight uppercase transition-colors ${
              project.size === 'large' ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
            }`}
          >
            {project.name}
          </h3>
          <p className="text-ink-muted mt-2 max-w-xl text-sm leading-relaxed md:text-base">
            {project.description}
          </p>
          <p className="text-ink-faint mt-3 font-mono text-[11px]">{project.tags.join(' / ')}</p>
        </div>
        <ArrowUpRight className="text-ink-faint group-hover:text-ice mt-1.5 size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </motion.div>
    </motion.a>
  )
}
