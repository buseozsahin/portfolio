import Nav from "./components/Nav"
import Hero from"./components/Hero"
import Skills from "./components/Skills"

function App() {
  return (
    <div className="min-h-screen bg-bg text-body antialiased">
      <Nav/>
      <div>
        <Hero/>
        <span className="inline-block w-full h-px bg-body/20"/>
        <Skills/>
        <span className="inline-block w-full h-px bg-body/20"/>
      </div>
    </div>
  )
}

export default App