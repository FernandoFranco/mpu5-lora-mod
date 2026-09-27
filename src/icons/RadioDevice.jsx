import { useIconSize } from '../hooks/useIconSize'

export default function RadioDevice({ size = 'md', width, height }) {
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
      <circle cx="12" cy="12" r="2"></circle>
      <path d="M12 2v4m0 8v4"></path>
      <path d="M2 12h4m8 0h4"></path>
      <path d="M5.93 5.93l2.83 2.83m5.48 0l2.83-2.83"></path>
      <path d="M5.93 18.07l2.83-2.83m5.48 0l2.83 2.83"></path>
    </svg>
  )
}
