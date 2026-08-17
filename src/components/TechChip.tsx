interface TechChip { tech: string }

function TechChip({ tech } : TechChip) {
  return(
    <span
      className="font-label text-body text-xs border border-body/20 rounded-sm px-2 py-1"
    >{tech}</span>
  )
}
export default TechChip;