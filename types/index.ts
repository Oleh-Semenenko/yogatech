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
}

export interface ISelectedProduct extends IProduct {
  quantity?: number
}

export enum LinkColor {
  BLUE = 'blue',
  ORANGE = 'orange'
}

export interface ICard {
  id: number
  title: string
  description: string
  photo: string | string[]
  link?: string
  linksText?: string
  linkColor?: LinkColor
  formBtn?: string
  contactsType?: boolean
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
