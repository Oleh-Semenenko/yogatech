import type { IProduct } from '~/types'

export default function useShop() {
  const products: IProduct[] = [
    {
      id: 1,
      title: 'Книга “Технологія йоги” Михайла Ахекяна',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro obcaecati ratione, aliquam ducimus optio ea minima maiores inventore omnis illum distinctio. Facere, architecto quaerat. Nobis, iusto. Nam commodi obcaecati ullam.',
      price: 1,
      photos: ['/images/book.png', '/images/book.png', '/images/book.png'],
      payment_link: 'https://secure.wayforpay.com/button/bac90579800e7'
    },
    {
      id: 2,
      title: 'Брендована біла футболка YOGATECH',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro obcaecati ratione, aliquam ducimus optio ea minima maiores inventore omnis illum distinctio. Facere, architecto quaerat. Nobis, iusto. Nam commodi obcaecati ullam.',
      price: 1,
      photos: [
        '/images/t_shirt/t-shirt.png',
        '/images/t_shirt/t-shirt-2.png',
        '/images/t_shirt/t-shirt-3.png'
      ],
      payment_link: 'https://secure.wayforpay.com/button/b50682ce6b3a0',
      sizes: [
        { id: 1, value: 'S' },
        { id: 2, value: 'M' },
        { id: 3, value: 'L' },
        { id: 4, value: 'XL' }
      ]
    }
  ]

  const courses: IProduct[] = [
    {
      id: 1,
      title: '28-денний курс з медитації “Медитація 2.0”',
      description: 'Практичний путівник, написаний йогом та адресований йогам',
      price: 1,
      photos: ['/images/book.png', '/images/book.png', '/images/book.png'],
      payment_link: 'https://secure.wayforpay.com/button/bc04782a4b6aa'
    },
    {
      id: 2,
      title: 'Курс з 10 лекцій “Пранаями”',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro obcaecati ratione, aliquam ducimus optio ea minima maiores inventore omnis illum distinctio. Facere, architecto quaerat. Nobis, iusto. Nam commodi obcaecati ullam.',
      price: 1,
      photos: ['/images/book.png', '/images/book.png', '/images/book.png'],
      payment_link: 'https://secure.wayforpay.com/button/bc04782a4b6aa'
    }
  ]
  return {
    products,
    courses
  }
}
