interface ButtonProps {
  label: string
  href: string
  variant: "primary" | "secondary"
}

function Button({ label, href, variant } : ButtonProps) {
  const styles = variant === "primary" ? " text-bg bg-gold border-gold" : "text-heading border-body"
  const base = "px-6 py-4 border text-base font-label" 

  return(
    <a 
      className={`${base} ${styles}`}
      href={href}
    >{label}</a>
  )
}
export default Button;