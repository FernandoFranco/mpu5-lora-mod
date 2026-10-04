import { FC } from 'react'
import { SVGIcon } from '@/components/base/SVGIcon'
import type { IconProps } from '@/types'

export const Mpu5LogoIcon: FC<IconProps> = ({ color = 'currentColor', ...props }) => (
  <SVGIcon viewBox="2.5 2.2 59 59" color={color} fill={color} stroke="none" {...props}>
    <path
      d="M25 24L21 6M32 24V4M39 24L43 6"
      fill="none"
      stroke={color}
      strokeWidth="3.4"
      strokeLinecap="round"
    />
    <path
      fillRule="evenodd"
      d="M19 49.1V24.5A3.5 3.5 0 0 1 22.5 21H41.5A3.5 3.5 0 0 1 45 24.5V49.1ZM23.6 28a1.4 1.4 0 0 1 2.8 0v16a1.4 1.4 0 0 1-2.8 0ZM30.6 28a1.4 1.4 0 0 1 2.8 0v16a1.4 1.4 0 0 1-2.8 0ZM37.6 28a1.4 1.4 0 0 1 2.8 0v16a1.4 1.4 0 0 1-2.8 0Z"
    />
    <path d="M19 50.9H45V57.5A3.5 3.5 0 0 1 41.5 61H22.5A3.5 3.5 0 0 1 19 57.5Z" />
  </SVGIcon>
)
