import Button from "./Button";

function Hero() {
  return(
    <section className="flex flex-col min-h-screen justify-center pt-16 px-6 lg:px-32 relative">     
      <h1 className="font-heading italic text-heading text-5xl lg:text-8xl mt-4">Buse Ozsahin</h1>
      <div className="flex gap-2">
        <p className="font-heading text-body text-lg lg:text-2xl mt-4">Computer Science Student - </p>
        <p className="font-heading text-gold text-lg lg:text-2xl mt-4">Focused on Web Development</p>
      </div>
      
      <p className="font-body text-body max-w-md mt-6"
        >Junior CS student with a concentration in Web Development. 
        Passionate about building innovative projects focused on fully responsive web products. 
        Mostly comfortable with web development skills, but always learning new technologies. 
       </p>

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
          <p className="font-heading italic text-gold text-3xl">10</p>
          <p className="font-label text-xs uppercase tracking-wider text-body mt-1">Technologies</p>
        </div>
        <div>
          <p className="font-heading italic text-gold text-3xl">4</p>
          <p className="font-label text-xs uppercase tracking-wider text-body mt-1">GitHub Repos</p>
        </div>
      </div>

      <div className="flex gap-2 absolute bottom-16 lg:bottom-11 right-16 lg:right-32">
        <p className="font-label text-xs uppercase tracking-wider text-body">Scroll</p>
        <div className="w-[1px] h-8 bg-linear-to-b from-body to-transparent"></div>
      </div>
    </section>
  )
}
export default Hero;