import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { EXPERIENCE, MILESTONES } from '@/constants/Experience'
import { fadeUp, stagger, viewport } from '@/lib/motion'

export const ExperienceSection = () => (
  <section id="experience" className="border-line border-t px-6 py-28">
    <div className="mx-auto max-w-6xl">
      <SectionHeading eyebrow="// experience" title="Work & milestones" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={stagger}
        className="grid gap-5 lg:grid-cols-[1.35fr_1fr]"
      >
        <div className="flex flex-col gap-5">
          {EXPERIENCE.map((item) => (
            <motion.article
              key={`${item.organization}-${item.role}`}
              variants={fadeUp}
              className="border-line bg-surface rounded-lg border p-6 md:p-7"
            >
              <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-ink-faint mb-2 font-mono text-[11px] tracking-[0.16em] uppercase">
                    {item.period}
                  </p>
                  <h3 className="text-ink text-xl font-semibold tracking-tight">{item.role}</h3>
                  <p className="text-ice mt-1 text-sm">{item.organization}</p>
                </div>
                <span className="border-line text-ink-muted rounded-sm border px-2.5 py-1 font-mono text-[10px] tracking-[0.12em] uppercase">
                  {item.type}
                </span>
              </div>
              <p className="text-ink-muted leading-relaxed">{item.description}</p>
            </motion.article>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <motion.div variants={fadeUp} className="border-line bg-surface rounded-lg border p-6">
            <div className="grid grid-cols-3 gap-3">
              {MILESTONES.map((milestone) => (
                <div key={milestone.detail} className="min-w-0 text-center">
                  <p className="text-ink text-2xl font-semibold tracking-tight">
                    {milestone.value}
                  </p>
                  <p className="text-ink-muted mt-2 text-xs leading-snug">{milestone.label}</p>
                  <p className="text-ink-faint mt-1 font-mono text-[9px] tracking-wider uppercase">
                    {milestone.detail}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="border-ice-line bg-ice-soft flex flex-1 flex-col justify-between rounded-lg border p-6"
          >
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="relative flex size-2.5">
                  <span className="bg-ice absolute inline-flex size-full animate-ping rounded-full opacity-50" />
                  <span className="bg-ice relative inline-flex size-2.5 rounded-full" />
                </span>
                <p className="text-ink font-medium">Open to opportunities</p>
              </div>
              <p className="text-ink-muted text-sm leading-relaxed">
                Looking for part-time development, technical support, or an internship alongside
                school.
              </p>
            </div>
            <div className="text-ink-faint mt-6 flex items-center gap-2 font-mono text-[11px]">
              <MapPin className="size-3.5" />
              South Bohemia or remote
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
)
