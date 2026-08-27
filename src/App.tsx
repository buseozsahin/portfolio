import Nav from "./components/Nav"
import Hero from"./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Resume from "./components/Resume"
import Contact from "./components/Contact"

function App() {
  return (
    <div className="min-h-screen bg-bg text-body antialiased">
      <Nav/>
      <div>
        <Hero/>
        <span className="inline-block w-full h-px bg-body/20"/>
        <Projects />
        <span className="inline-block w-full h-px bg-body/20"/>
        <Skills/>
        <span className="inline-block w-full h-px bg-body/20"/>
        <Resume/>
        <span className="inline-block w-full h-px bg-body/20"/>
        <Contact/>
      </div>
    </div>
  )
}

export default App