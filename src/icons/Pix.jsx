import { useIconSize } from '../hooks/useIconSize'

export default function PixIcon({ size = 'md', width, height, color = 'currentColor' }) {
  const { width: w, height: h } = useIconSize(size, width, height)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={w}
      height={h}
      color={color}
      fill={color}
      stroke="none"
    >
      <path d="M12 2L6 8L2 12L6 16L12 22L18 16L22 12L18 8L12 2M12 8L8 12L12 16L16 12L12 8Z" />
    </svg>
  )
}
