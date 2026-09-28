import { FC, ReactNode, SVGProps } from 'react'
import { useIconSize } from '@/hooks'
import type { IconProps } from '@/types'

interface SVGIconProps
  extends IconProps, Omit<SVGProps<SVGSVGElement>, 'width' | 'height' | 'color'> {
  children: ReactNode
}

export const SVGIcon: FC<SVGIconProps> = ({
  size = 'md',
  width,
  height,
  color = 'currentColor',
  viewBox = '0 0 24 24',
  fill = 'none',
  stroke,
  strokeWidth = '1.5',
  strokeLinecap = 'round',
  strokeLinejoin = 'round',
  children,
  ...props
}) => {
  const { width: w, height: h } = useIconSize(size, width, height)

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width={w}
      height={h}
      color={color}
      fill={fill}
      stroke={stroke ?? color}
      strokeWidth={strokeWidth}
      strokeLinecap={strokeLinecap}
      strokeLinejoin={strokeLinejoin}
      {...props}
    >
      {children}
    </svg>
  )
}
