import ProjectCard from "./ProjectCard";

function Projects() {
  return(
    <section className="flex flex-col min-h-screen justify-center px-6 lg:px-32" id="projects">
      <div>
        <p className="text-gold font-label text-sm lg:text-md tracking-wider uppercase">Selected Work</p>
        <h1 className="font-heading italic text-heading text-2xl lg:text-5xl mt-4">Things I've built</h1>
        <span className="inline-block w-25 h-px bg-gold"/>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-body/10 border border-body/10 mt-5">
        <ProjectCard
          statusBadge="Live"
          title="Financial RAG Copilot "
          description="Developed a Retrieval-Augmented Generation (RAG) system using Python, FAISS, 
            SentenceTransformers, Streamlit, and Ollama (Llama 3.2) with Fast, Balanced, and Accurate response modes."
          technologies={["Python", "FAISS", "SentenceTransformers", "Streamlit"]}
          links={[
            { label: "GitHub", href: "https://github.com/buseozsahin/financial_rag_copilot" }
          ]}
        />
      </div>
    </section>
)
}
 export default Projects;