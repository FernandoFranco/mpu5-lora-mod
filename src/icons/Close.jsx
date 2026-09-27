import { useIconSize } from '../hooks/useIconSize'

export default function CloseIcon({ size = 'md', width, height }) {
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
      <path d="M18 6L6.00081 17.9992M17.9992 18L6 6.00085"></path>
    </svg>
  )
}
