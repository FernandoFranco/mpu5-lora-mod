import { useIconSize } from '../hooks/useIconSize'

export default function ChevronRight({ size = 'md', width, height, color = 'currentColor' }) {
  const { width: w, height: h } = useIconSize(size, width, height)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={w}
      height={h}
      color={color}
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 6L15 12L9 18"></path>
    </svg>
  )
}
