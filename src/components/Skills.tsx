interface SkillCategory { label: string; skills: string[] }
interface Course { name: string; semester: string }

function Skills() {
  const categories: SkillCategory[] = [
    { label: "Languages", skills: ["Python", "Java", "JavaScript", "TypeScript"] },
    { label: "Frameworks", skills: ["React", "Tailwind", "Streamlit"] },
    { label: "Tools", skills: ["Git / GitHub", "FAISS", "Ollama (Llama3.2)"] },
    { label: "Concepts", skills: ["RAG", "Semantic Search", "RESTful APIs"] },
  ]

  const courses: Course[] = [
    { name: "Programming Problem Solving I/II", semester: "Fall 2024" },
    { name: "Data Structures", semester: "Fall 2025" },
    { name: "Intro to Software Engineering", semester: "Fall 2025" },
    { name: "Artificial Intelligence", semester: "Spring 2026" },
    { name: "Intro to Database Systems", semester: "Spring 2026" },
    { name: "Fundaentals of Data Communications", semester: "Spring 2026" },
    { name: "Machine Learning", semester: "Fall 2026" },
    { name: "Computer Organization & Architecture", semester: "Fall 2026" },
    { name: "Algorithm Analysis", semester: "Fall 2026" },
  ]

  return(
    <section className="flex flex-col min-h-screen justify-center px-6 lg:px-32" id="skills">
      <div className="">
        <p className="text-gold font-label text-sm lg:text-md tracking-wider uppercase mt-24">Skills/CourseWork</p>
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
       <div className="mt-16 mb-2">
        <p className="font-label font-semibold text-sm lg:text-md text-gold tracking-wider uppercase mb-4">Coursework</p>
        <div>
          {courses.map((course) => (
            <div
              key={course.name}
              className="font-body text-md lg:text-lg py-1"
            >
              {course.name} <span className="font-body text-gold text-md">— {course.semester}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Skills;