import type { LegalResources } from '@/types'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'legal'
    resources: {
      legal: LegalResources
    }
  }
}
