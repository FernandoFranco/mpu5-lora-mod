import { FC } from 'react'
import { SVGIcon } from '@/components/base/SVGIcon'
import type { IconProps } from '@/types'

export const Lock: FC<IconProps> = props => (
  <SVGIcon strokeLinecap="butt" strokeLinejoin="miter" {...props}>
    <path
      d="M16.5 9V6.5C16.5 4.01472 14.4853 2 12 2C9.51472 2 7.5 4.01472 7.5 6.5V9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 9H6.00018C4.89554 9 4.00008 9.89554 4.00018 11.0002L4.00102 20.0002C4.00112 21.1047 4.89652 22 6.00101 22H18C19.1046 22 20 21.1046 20 20V11C20 9.89543 19.1046 9 18 9Z"
      strokeLinecap="round"
    />
    <circle cx="12" cy="15.5" r="2" />
  </SVGIcon>
)
