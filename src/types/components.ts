import { FC, ReactNode } from 'react'
import type { STLGroup, STLPart } from './data'
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
  title: ReactNode
  description: ReactNode
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

export interface RotationNudge {
  id: number
  delta: number
}

export interface STLGroupViewerProps {
  file: string
  color: string
  autoRotate?: boolean
  nudge?: RotationNudge | null
  onAngleChange?: (degrees: number) => void
}

export interface PartsListProps {
  parts: STLPart[]
  selectedId?: string | null
  onSelect: (id: string) => void
}

export interface PartPreviewPanelProps {
  part: STLPart
  index: number
  total: number
}

export interface GroupSelectProps {
  groups: STLGroup[]
  selectedId: string
  onSelect: (id: string) => void
}

export interface NavbarProps {
  onToggleTheme: () => void
  isDark: boolean
}

export interface LegalDocumentProps {
  documentKey: 'terms' | 'privacy'
}

export interface CookieConsentBannerProps {
  reopenSignal: number
}

export interface FooterProps {
  onOpenCookiePreferences: () => void
}

export interface ExternalLinkProps {
  href: string
  children: ReactNode
}
