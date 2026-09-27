export interface STLFile {
  name: string
  path: string
  id: string
}

export interface STLGroup {
  title: string
  files: STLFile[]
}

export interface SpecFile {
  title: string
  description: string
  href?: string
  icon?: string
}
