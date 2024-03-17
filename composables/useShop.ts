import { type IProduct, ProductGroup } from '~/types'

export default function useShop() {
  const products: IProduct[] = [
    {
      id: 1,
      title: 'Книга “Технологія йоги” Михайла Ахекяна',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro obcaecati ratione, aliquam ducimus optio ea minima maiores inventore omnis illum distinctio. Facere, architecto quaerat. Nobis, iusto. Nam commodi obcaecati ullam.',
      price: 1,
      photos: ['/images/book.png', '/images/book.png', '/images/book.png'],
      payment_link: 'https://secure.wayforpay.com/button/bac90579800e7',
      slug: 'book'
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
      slug: 't-shirt',
      sizes: [
        { id: 1, value: 'S' },
        { id: 2, value: 'M' },
        { id: 3, value: 'L' },
        { id: 4, value: 'XL' }
      ],
      selectedSize: { id: 1, value: 'S' }
    }
  ]

  const courses: IProduct[] = [
    {
      id: 1,
      title: '28-денний курс з медитації “Медитація 2.0”',
      description: 'Практичний путівник, написаний йогом та адресований йогам',
      price: 1,
      photos: ['/images/book.png', '/images/book.png', '/images/book.png'],
      payment_link: 'https://secure.wayforpay.com/button/bc04782a4b6aa',
      slug: 'course-meditation-2.0'
    },
    {
      id: 2,
      title: 'Курс з 10 лекцій “Пранаями”',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro obcaecati ratione, aliquam ducimus optio ea minima maiores inventore omnis illum distinctio. Facere, architecto quaerat. Nobis, iusto. Nam commodi obcaecati ullam.',
      price: 1,
      photos: ['/images/book.png', '/images/book.png', '/images/book.png'],
      payment_link: 'https://secure.wayforpay.com/button/bc04782a4b6aa',
      slug: 'course-pranayamas'
    }
  ]

  const getOneProduct = (slug: string, group: ProductGroup) => {
    return group === ProductGroup.PRODUCT
      ? products.filter((p) => p.slug === slug)[0]
      : courses.filter((c) => c.slug === slug)[0]
  }

  const getProductsExceptSelected = (slug: string, group: ProductGroup) => {
    return group === ProductGroup.PRODUCT
      ? products.filter((p) => p.slug !== slug)
      : courses.filter((c) => c.slug !== slug)
  }
  return {
    products,
    courses,
    getOneProduct,
    getProductsExceptSelected
  }
}
