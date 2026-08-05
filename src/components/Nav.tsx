function Nav() {
  const links =[
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#resume", label: "Resume" },
    { href: "#contact", label: "Contact" }
  ]

  return (
    <header className="flex justify-between text-body font-label text-base tracking-wider px-16 py-5 uppercase">
      <p className="text-heading">B. Ozsahin</p>
      <nav className="flex gap-6">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            >
              {link.label}
            </a>

          ))}
      </nav>
    </header>
  )
}
export default Nav;