export interface STLPart {
  id: string
  name: string
  file: string
  mat: string
  layer: string
  infill: string
  support: string
  qty: number
}

export interface STLGroup {
  id: string
  name: string
  description: string
  parts: STLPart[]
}
