interface ContactLink {
  label: string
  href: string
}

function Contact() {
  const links: ContactLink[] = [
    { label: "bozsahin@students.kennesaw.edu", href: "mailto:bozsahin@students.kennesaw.edu" },
    { label: "LinkedIn ↗", href: "https://linkedin.com/in/buse-ozsahin-akts" },
    { label: "GitHub ↗", href: "https://github.com/buseozsahin" },
    { label: "Handshake ↗", href: "https://app.joinhandshake.com/profiles/buse" },
  ]

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return(
    <section className="relative flex flex-col min-h-screen justify-center px-6 lg:px-32" id="contact">
      <div>
        <p className="text-gold font-label text-sm lg:text-md tracking-wider uppercase">Contact</p>
        <h1 className="font-heading italic text-heading text-4xl lg:text-5xl mt-4 max-w-2xl">
          Looking for a web dev intern? Let's talk.
        </h1>
        <span className="inline-block w-25 h-px bg-gold mt-6"/>
      </div>

      <div className="flex flex-wrap gap-9 mt-14">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-label text-sm text-body hover:text-heading transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
      
      <div className="flex gap-2 absolute bottom-16 lg:bottom-11 right-16 lg:right-32">
        <button
          onClick={scrollToTop}
          className="flex font-label text-xs uppercase tracking-wider text-body hover:text-gold transition-colors mt-16 self-start"
        >
          Click to top
          <div className="w-[1px] h-8 bg-linear-to-b from-body to-transparent"></div>
        </button>
      </div>

    </section>
  )
}
export default Contact;