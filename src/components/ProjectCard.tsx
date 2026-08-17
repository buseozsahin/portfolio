import TechChip from "./TechChip"

interface ProjectLinks {
  label: string
  href:  string
}

interface ProjectCard {
  statusBadge: "Live" | "In Progress"
  title: string
  description: string
  technologies: string[]
  links: ProjectLinks[]
}

function ProjectCard({ statusBadge, title, description, technologies, links }: ProjectCard) {
  return(
    <section className="bg-bg relative transition-colors hover:bg-panel p-9">
      <span className="font-label text-xs uppercase tracking-wider text-[#5aa06a] border border-[#5aa06a]/20 rounded-sm py-1 px-2 absolute right-0 top-0">{statusBadge}</span>
      <h1 className="font-heading text-heading font-semibold text-2xl mt-4">{title}</h1>
      <p className="font-body text-body text-sm mt-3">{description}</p>

      <div className="flex flex-wrap gap-2 mt-5">
        {technologies.map((techName) => (
          <TechChip tech={techName} 
            key={techName}/>
        ))}
      </div>

      <div className="flex gap-4 mt-5">
        {links.map((link) =>(
          <a
            key={link.label}
            href={link.href}
            className="text-heading font-label text-sm border-b border-gold/50 pb-0.5 hover:opacity-70 transition-opacity"
            >{link.label}</a>
        ))}
      </div>
    </section>
  )
}
export default ProjectCard;