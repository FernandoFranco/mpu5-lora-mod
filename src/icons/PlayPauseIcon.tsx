import { FC } from 'react'
import { SVGIcon } from '@/components/base/SVGIcon'
import type { IconProps } from '@/types'

interface PlayPauseIconProps extends IconProps {
  state?: 'play' | 'pause'
}

export const PlayPauseIcon: FC<PlayPauseIconProps> = ({ state = 'play', color, ...props }) => (
  <SVGIcon strokeWidth="2" color={color} {...props}>
    {state === 'play' ? (
      <path d="M5 3l14 9-14 9V3z" fill={color ?? 'currentColor'} />
    ) : (
      <>
        <rect x="6" y="4" width="4" height="16" />
        <rect x="14" y="4" width="4" height="16" />
      </>
    )}
  </SVGIcon>
)
