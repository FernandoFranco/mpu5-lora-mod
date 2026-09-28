import { FC } from 'react'
import { SVGIcon } from '@/components/base/SVGIcon'
import type { IconProps } from '@/types'

export const InfoCircle: FC<IconProps> = props => (
  <SVGIcon {...props}>
    <circle cx="12" cy="11.9999" r="10" />
    <path d="M12 15.9999L12 11.9999" />
    <path d="M11.875 8.24994L12 8.24994M11.75 8.24994C11.75 8.11187 11.8619 7.99994 12 7.99994C12.1381 7.99994 12.25 8.11187 12.25 8.24994C12.25 8.38801 12.1381 8.49994 12 8.49994C11.8619 8.49994 11.75 8.38801 11.75 8.24994Z" />
  </SVGIcon>
)
