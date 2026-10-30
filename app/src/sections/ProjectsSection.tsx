import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { Projects } from '@/constants/Projects'

export const ProjectsSection = () => (
  <section id="projects" className="px-6 py-28 md:py-36">
    <div className="mx-auto max-w-7xl">
      <SectionHeading title="Work" />
      <div className="grid grid-cols-12 gap-x-6 gap-y-16 md:gap-y-24">
        {Projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </div>
  </section>
)
