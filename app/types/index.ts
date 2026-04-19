// Interface for all the works to be displayed in the gallery
export interface Work {
  id: number
  title: string
  category: string
  description: string
  img?: string
  images?: string[]
  video?: string
  year: number
}