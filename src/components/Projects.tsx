import ProjectCard from "./ProjectCard";

function Projects() {
  return(
    <section className="flex flex-col min-h-screen justify-center px-6 lg:px-32" id="projects">
      <div>
        <p className="text-gold font-label text-sm lg:text-md tracking-wider uppercase mt-24">Selected Work</p>
        <h1 className="font-heading italic text-heading text-2xl lg:text-5xl mt-4">Things I've built</h1>
        <span className="inline-block w-25 h-px bg-gold"/>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-body/10 border border-body/10 mt-5">
        <ProjectCard
          statusBadge="LIVE"
          title="Financial RAG Copilot "
          description="Developed a Retrieval-Augmented Generation (RAG) system using Python, FAISS, 
            SentenceTransformers, Streamlit, and Ollama (Llama 3.2) with Fast, Balanced, and Accurate response modes."
          technologies={["Python", "FAISS", "SentenceTransformers", "Streamlit"]}
          links={[
            { label: "GitHub ↗", href: "https://github.com/buseozsahin/financial_rag_copilot" }
          ]}
        />

        <ProjectCard
          statusBadge="Front-End Ready"
          title="Job Finder Web App"
          description="Developed a responsive web application, built with React, JavaScript, and Tailwind. 
          Allowing users to search, filter, save, and apply to detailed job opennings."
          technologies={["JavaScript", "React", "Tailwind"]}
          links={[
            { label: "GitHub ↗", href: "https://github.com/buseozsahin/job-finder" },
            { label: "Link ↗", href: "https://buseozsahin.github.io/job-finder/"}
          ]}
        />

        <ProjectCard
          statusBadge="LIVE"
          title="Personal Web Site"
          description="Built a fully responsive personal portfolio site using React, TypeScript, and Tailwind CSS s, 
          featuring reusable component architecture, CSS Grid layouts, and smooth-scroll navigation."
          technologies={["TypeScript", "React", "Tailwind"]}
          links={[
            { label: "GitHub ↗", href: "https://github.com/buseozsahin/portfolio" }
          ]}
        />
      
        <ProjectCard
          statusBadge="IN PROGRESS"
          title="Cocktail Web App"
          description="Developed a responsive web application, built with React, HTML, CSS, and JavaScript. 
          Integrated a cocktail REST API, allowing users to search and access detailed cocktail information."
          technologies={["JavaScript", "React", "HTML", "CSS", "REST API"]}
          links={[
            { label: "GitHub ↗", href: "https://github.com/buseozsahin/Cocktail-React-App" }
          ]}
        />
      </div>
    </section>
)
}
 export default Projects;