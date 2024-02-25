export interface IFeature {
  id: number
  title: string
  text: string
  color: string
}

export interface IProduct {
  id: number
  title: string
  description: string
  price: number
  photos: string[]
  payment_link: string
}

export interface ISelectedProduct extends IProduct {
  quantity: number;
}
