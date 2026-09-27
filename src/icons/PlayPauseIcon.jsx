import { useIconSize } from '../hooks/useIconSize'

export default function PlayPauseIcon({
  size = 'md',
  width,
  height,
  color = 'currentColor',
  state = 'play',
}) {
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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {state === 'play' ? (
        <path d="M5 3l14 9-14 9V3z" fill={color} />
      ) : (
        <>
          <rect x="6" y="4" width="4" height="16" />
          <rect x="14" y="4" width="4" height="16" />
        </>
      )}
    </svg>
  )
}
