import { FC } from 'react'
import { Link } from '@mui/material'
import type { ExternalLinkProps } from '@/types'

export const ExternalLink: FC<ExternalLinkProps> = ({ href, children }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer" sx={{ color: 'primary.main' }}>
    {children}
  </Link>
)
