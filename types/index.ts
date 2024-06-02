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
  description: string | string[]
  price?: number
  photos: string[]
  payment_link: string
  slug: string
  sizes?: ISize[]
  sizesImg?: string
  selectedSize?: ISize
  shortDescription?: string
  videoId?: string
  preOrder?: string
}

export interface ICourse extends IProduct {
  level: DifficultyLevel
  levelUA: string
  lectures: string[]
  author: string
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
  icon?: string | string[]
  link?: string
  linksText?: string
  linkColor?: LinkColor
}

export interface ISocial {
  icon: string
  link: string
}

export interface ITeammate {
  id: number
  coverImg: string
  photos: string[]
  name: string
  description: string
  motivation: string
  video?: string
  achievements: string[]
  intro: string
  slug: string
  socials: ISocial[]
}

export interface IPartner extends ICard {
  img: string
  promocodeText: string
  promocode: string
}

export enum ProductGroup {
  PRODUCT = 'product',
  COURSE = 'course'
}

export enum ListItemType {
  TEAMMATE = 'teammate',
  PARTNER = 'partner',
}
