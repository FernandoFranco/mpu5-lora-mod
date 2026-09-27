import { ReactNode } from 'react'

export interface BaseCardProps {
  icon?: ReactNode
  title: string
  description: string
}

export interface SectionProps {
  children?: ReactNode
}

export interface NavbarProps {
  onThemeChange?: (isDark: boolean) => void
}

export interface FooterProps {
  children?: ReactNode
}
