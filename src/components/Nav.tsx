interface NavLink { href: string; label: string}

function Nav() {
  const links: NavLink[] = [
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#resume", label: "Resume" },
    { href: "#contact", label: "Contact" }
  ]

  return (
    <header className="flex fixed top-0 left-0 right-0 z-50 justify-between text-body font-label text-base tracking-wider 
    px-6 lg:px-32 py-5 uppercase backdrop-blur-md bg-linear-to-b from-bg/90 to-transparent">
      <p className="text-heading">B. Ozsahin</p>
      <nav className="flex gap-6">
        {links.map((link) => (
          <a
            className="hover:text-heading transition-colors duration-200 relative group"
            key={link.href}
            href={link.href}
            >
              {link.label}
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>

          ))}
      </nav>
    </header>
  )
}
export default Nav;