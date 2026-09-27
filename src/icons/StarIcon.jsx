import { useIconSize } from '../hooks/useIconSize'

export default function StarIcon({
  size = 'md',
  width,
  height,
  color = 'currentColor',
  filled = false,
}) {
  const { width: w, height: h } = useIconSize(size, width, height)

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={w}
      height={h}
      color={color}
      fill={filled ? color : 'none'}
      stroke={filled ? 'none' : color}
      strokeWidth={filled ? '0' : '2'}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2l3 8h8l-6.5 5 2.5 8L12 16l-6.5 5 2.5-8L1 10h8z" />
    </svg>
  )
}
