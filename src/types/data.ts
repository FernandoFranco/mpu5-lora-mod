export interface STLPart {
  id: string
  name: string
  file: string
  infill: string
  support: string
  walls: string
  qty: number
}

export interface STLGroup {
  id: string
  name: string
  description: string
  parts: STLPart[]
}
