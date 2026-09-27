import { useIconSize } from '../hooks/useIconSize'

export default function MapPin({ size = 'md', width, height, color = 'currentColor' }) {
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
      <path d="M5 16C3.7492 16.6327 3 17.4385 3 18.3158C3 20.3505 7.02944 22 12 22C16.9706 22 21 20.3505 21 18.3158C21 17.4385 20.2508 16.6327 19 16"></path>
      <path d="M12 10V17"></path>
      <circle cx="12" cy="6" r="4"></circle>
    </svg>
  )
}
