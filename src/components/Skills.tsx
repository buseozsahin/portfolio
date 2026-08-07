interface SkillCategory { label: string; skills: string[] }

function Skills() {
  const categories: SkillCategory[] = [
    { label: "Languages", skills: ["Python", "Java", "JavaScript / TypeScript", "SQL"] },
    { label: "Frameworks", skills: ["React", "Next.js", "Tailwind CSS", "Node.js"] },
    { label: "Tools", skills: ["Git / GitHub", "Figma", "Vercel", "Postman"] },
    { label: "Currently Learning", skills: ["PostgreSQL", "Docker", "GraphQL"] }
  ]

  return(
    <section className="flex flex-col min-h-screen justify-center px-6 lg:px-32" id="skills">
      <div className="">
        <p className="text-gold font-label text-sm lg:text-md tracking-wider uppercase">Skills</p>
        <h1 className="font-heading italic text-heading text-2xl lg:text-5xl mt-4">What I work with</h1>
        <span className="inline-block w-25 h-px bg-gold"/>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-body/10 border border-body/10 mt-14">
        {categories.map((category) => {
          const isLearning = category.label === "Currently Learning"
          return (
            <div key={category.label} className="bg-bg px-7 py-8 ">
              <h3 className="font-label font-semibold text-sm lg:text-md text-gold tracking-wider uppercase mb-4">{category.label}</h3>
              <ul>
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className={`font-body text-md lg:text-lg border-t border-body/20 first:border-t-0 py-1.5 ${isLearning ? "text-heading" : "text-body"}`}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}
export default Skills;