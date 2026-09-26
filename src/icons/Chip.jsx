import { useIconSize } from '../hooks/useIconSize'

export default function ChipIcon({ size = 'md', width, height }) {
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
      <rect x="5" y="5" width="14" height="14" rx="2" />
      <path d="M9 2v3M9 19v3M15 2v3M15 19v3M2 9h3M19 9h3M2 15h3M19 15h3" />
      <rect x="7" y="7" width="10" height="10" rx="1" />
    </svg>
  )
}
