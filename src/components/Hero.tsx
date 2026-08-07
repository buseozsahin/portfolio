import Button from "./Button";

function Hero() {
  return(
    <section className="flex flex-col min-h-screen justify-center pt-16 px-6 lg:px-32 relative">
      <div className="flex items-center gap-2">
         <span className="w-2 h-2 rounded-full bg-[#5aa06a] shadow-[0_0_8px_#5aa06a]"></span>
         <span className="font-label text-gold tracking-wider text-sm uppercase">Open to Summer 2027 internships</span>
      </div>
     
      <h1 className="font-heading italic text-heading text-5xl lg:text-8xl mt-4">Buse Ozsahin</h1>
      <p className="font-heading text-body text-lg lg:text-2xl mt-4">Computer Science Student — Web Developer</p>
      <p className="font-body text-body max-w-md mt-6"
        >Junior CS student who builds full front-to-back web products, not just class assignments. 
        Comfortable with React, TypeScript, JavaScript and Tailwind — currently expanding into backend and databases.</p>

      <div className="flex gap-4 mt-12">
        <Button 
          label="View Projects"
          href ="#projects"
          variant="primary"
        />
        <Button
          label="View Resume"
          href="#resume"
          variant="secondary"
        />
      </div>

      <div className="flex gap-6 lg:gap-10 mt-12">
        <div>
          <p className="font-heading italic text-gold text-3xl">4</p>
          <p className="font-label text-xs uppercase tracking-wider text-body mt-1">Projects Shipped</p>
        </div>
        <div>
          <p className="font-heading italic text-gold text-3xl">8</p>
          <p className="font-label text-xs uppercase tracking-wider text-body mt-1">Technologies</p>
        </div>
        <div>
          <p className="font-heading italic text-gold text-3xl">3</p>
          <p className="font-label text-xs uppercase tracking-wider text-body mt-1">GitHub Repos</p>
        </div>
      </div>

      <div className="absolute bottom-40 lg:bottom-11 left-6 lg:left-32">
        <p className="font-label text-xs uppercase tracking-wider text-body">Scroll</p>
        <div className="w-px h-8 bg-body"></div>
      </div>
    </section>
  )
}
export default Hero;