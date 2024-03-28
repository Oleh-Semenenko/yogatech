export interface IFeature {
  id: number
  title: string
  text: string | string[]
  color: string
}

export interface ISize {
  id: number
  value: string
}

export interface IProduct {
  id: number
  title: string
  description: string
  price: number
  photos: string[]
  payment_link: string
  slug: string
  sizes?: ISize[]
  selectedSize?: ISize
  shortDescription?: string
  video?: string
}

export interface ICourse extends IProduct {
  level: DifficultyLevel
}

export interface ISelectedProduct extends IProduct {
  quantity?: number
}

export enum DifficultyLevel {
  LIGHT = 'light',
  MIDDLE = 'middle',
  HARD = 'hard'
}

export enum LinkColor {
  BLUE = 'blue',
  ORANGE = 'orange'
}

export interface ICard {
  id: number
  title: string
  description: string | string[]
  icon: string | string[]
  link?: string
  linksText?: string
  linkColor?: LinkColor
}

export interface ITeammate {
  id: number
  img: string
  name: string
  description: string
  intro: string
  instagramLink: string
  slug: string
}

export enum ProductGroup {
  PRODUCT = 'product',
  COURSE = 'course'
}
