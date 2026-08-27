import Button from "./Button";

function Resume() {
  return(
    <section className="flex flex-col min-h-screen justify-center px-6 lg:px-32" id="resume">
      <div>
        <p className="text-gold font-label text-sm lg:text-md tracking-wider uppercase">Resume</p>
        <h1 className="font-heading italic text-heading text-2xl lg:text-5xl mt-4">The short version</h1>
        <span className="inline-block w-25 h-px bg-gold"/>
      </div>
  
      <div className="flex flex-wrap items-center justify-between gap-6 bg-panel border border-body/10 px-8 py-9 mt-14">
        <div>
          <h3 className="font-heading italic text-heading text-3xl tracking-wide">Buse Ozsahin - Resume</h3>
          <p className="font-body text-gold text-md mt-2 italic">B.S. Computer Science, expected 2028</p>
        </div>
        <Button 
          label="View PDF"
          href="/portfolio/buse-ozsahin-resume.pdf"
          variant="primary"
        />
      </div>
    </section>
)
}
 export default Resume;