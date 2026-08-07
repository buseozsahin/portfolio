import Nav from "./components/Nav"
import Hero from"./components/Hero"

function App() {
  return (
    <div className="min-h-screen bg-bg text-body antialiased">
      <Nav/>
      <div className="">
        <Hero/>
      </div>
    </div>
  )
}

export default App