import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { Projects } from '@/constants/Projects'
import { stagger, viewport } from '@/lib/motion'

export const ProjectsSection = () => {
  const [featured, ...rest] = Projects
  return (
    <section id="projects" className="py-28 px-6 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="// selected work" title="Projects" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
          className="flex flex-col gap-5"
        >
          <ProjectCard project={featured} featured />
          <div className="grid md:grid-cols-3 gap-5">
            {rest.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
