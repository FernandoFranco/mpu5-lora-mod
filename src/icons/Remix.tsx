import { FC } from 'react'
import { SVGIcon } from '@/components/base/SVGIcon'
import type { IconProps } from '@/types'

export const Remix: FC<IconProps> = props => (
  <SVGIcon strokeLinecap="butt" {...props}>
    <path
      d="M20 13V9L13 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H10"
      strokeLinecap="round"
    />
    <path d="M13 2V7C13 8.10457 13.8954 9 15 9H20" />
    <path
      d="M11 16L12 18C12.2426 16.3039 13.7368 15 15.5 15C16.6894 15 17.7402 15.5933 18.3726 16.5M20 21L19 19C18.7574 20.6961 17.2632 22 15.5 22C14.3106 22 13.2598 21.4067 12.6273 20.5"
      strokeLinecap="round"
    />
  </SVGIcon>
)
