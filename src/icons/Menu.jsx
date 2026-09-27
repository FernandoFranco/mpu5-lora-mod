import { useIconSize } from '../hooks/useIconSize'

export default function MenuIcon({ size = 'md', width, height }) {
  const { width: w, height: h } = useIconSize(size, width, height)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={w}
      height={h}
      color="currentColor"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 5L20 5"></path>
      <path d="M4 12L20 12"></path>
      <path d="M4 19L14 19"></path>
    </svg>
  )
}
