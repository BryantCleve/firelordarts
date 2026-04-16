import { siInstagram, siTiktok } from 'simple-icons'

const icons = {
  instagram: siInstagram,
  tiktok: siTiktok,
}

type IconName = keyof typeof icons

type IconProps = {
  name: IconName
  className?: string
}

export default function BrandIcon({ name, className }: IconProps) {
  const icon = icons[name]

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d={icon.path} />
    </svg>
  )
}