import { FC, ReactNode } from 'react'
import type { STLPart } from './data'
import type { IconProps } from './icons'

export interface FeatureCardProps {
  icon?: FC<IconProps>
  title: string
  description: string
}

export interface FeatureGridProps {
  features: FeatureCardProps[]
  columns?: number
}

export interface SectionContainerProps {
  children: ReactNode
  id?: string
  alt?: boolean
  borderTop?: boolean
  borderBottom?: boolean
  py?: number
}

export interface SectionTitleProps {
  label?: string
  title: string
  description?: string
  maxWidth?: string
}

export interface Step {
  number: number | string
  title: string
  description: string
  content?: ReactNode
  highlight?: boolean
}

export interface StepListProps {
  steps: Step[]
}

export interface TwoColumnSectionProps {
  left: ReactNode
  right: ReactNode
  leftSpan?: number
  rightSpan?: number
  gap?: number
  reverseOnMobile?: boolean
}

export interface STLGroupViewerProps {
  parts: STLPart[]
  highlightPartId?: string | null
}

export interface PartsListProps {
  parts: STLPart[]
  selectedId?: string | null
  onSelect: (id: string) => void
}
