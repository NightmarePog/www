import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { Projects } from '@/constants/Projects'
import { stagger, viewport } from '@/lib/motion'

export const ProjectsSection = () => {
  const [featured, ...rest] = Projects
  return (
    <section id="projects" className="border-line border-t px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="// selected work" title="Projects" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
          className="flex flex-col gap-5"
        >
          <ProjectCard project={featured} featured />
          <div className="grid gap-5 md:grid-cols-3">
            {rest.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
