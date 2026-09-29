export interface LegalSection {
  heading: string
  paragraphs: string[]
}

export interface LegalDocumentContent {
  title: string
  lastUpdated: string
  intro?: string
  sections: LegalSection[]
}

export interface LegalResources {
  terms: LegalDocumentContent
  privacy: LegalDocumentContent
}
