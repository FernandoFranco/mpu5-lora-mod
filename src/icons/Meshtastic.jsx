import { useIconSize } from '../hooks/useIconSize'

export default function MeshtasticIcon({ size = 'md', width, height }) {
  const { width: w, height: h } = useIconSize(size, width, height)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="2.25 7.667 19.5 8.667"
      width={w}
      height={h}
      color="currentColor"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="m2.25 16.334l6.5-8.667m13 8.667l-6.5-8.667l-6.5 8.667" />
    </svg>
  )
}
