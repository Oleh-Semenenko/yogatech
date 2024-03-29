import { type IProduct, type ICourse, ProductGroup, DifficultyLevel } from '~/types'

export default function useShop() {
  const products: IProduct[] = [
    {
      id: 1,
      title: 'Книга “Технологія йоги” Михайла Ахекяна',
      description:
        'Перед вами практичний путівник у світ йоги, написаний йогом і адресований йогам. У ній пояснена квінтесенція йогічної філософії, структуровані усі її основні терміни та інструменти. Усе науково, лаконічно, без двозначностей, протиріч, містики та релігійних домішок. Вона є ідеальним варіант для першої з йоги, однак і знайомі із йогою читачі знайдуть у ній багато корисних ключів для покращення власної практики та розуміння йоги вцілому.',
      shortDescription: 'Практичний путівник, написаний йогом та адресований йогам.',
      price: 1,
      photos: ['/images/book.png', '/images/book.png', '/images/book.png'],
      payment_link: 'https://secure.wayforpay.com/button/bac90579800e7',
      slug: 'book',
      video: 'https://www.youtube.com/embed/Mqa60lgJ1Bk?si=tfYUt29jtqCdlafu'
    },
    {
      id: 2,
      title: 'Брендована біла футболка YOGATECH',
      description:
        'Неймовірна футболка 100% бавовни, принт з якісної фарби, що не вимивається.',
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

  const courses: ICourse[] = [
    {
      id: 1,
      title: 'Медитація 2.0',
      shortDescription: '9 лекцій, у які утрамбовано понад 9 років моєї особистої практики. Фішки та лайф-хаки, спрощення та ускладнення, розуміння механіки роботи технік та будови психіки.',
      description: `Запис трансляцій нашого найбільш популярного курсу. 9 лекцій, у які утрамбовано понад 9 років моєї особистої практики. Фішки та лайф-хаки, спрощення та ускладнення, розуміння механіки роботи технік та будови психіки.<br />
      <br />

      Лекція 1 - Руйнуємо стереотипи та будуємо чітке розуміння теми. Напрацьовуємо концентрацію<br />
      Лекція 2 - Розбираємо будову психіки, ускладнюємо практики на концентрацію<br />
      Лекція 3 - Тренування пам'яті. Техніка та її ефекти<br />
      Лекція 4 - Практика підйому Кундаліні. Що воно таке та чим корисне<br />
      Лекція 5 - Аутогенне тренування, як мікс медитації та самогіпнозу<br />
      Лекція 6 - Медитативні техніки для роботи із панічними атаками<br />
      Лекція 7 - Медитативні техніки для роботи із негативними поведінковими паттернами<br />
      Лекція 8 - Самадхі та алгоритм його досягнення<br />
      Лекція 9 - Інструкція до подальшої самостійної практики`,
      price: 1,
      photos: ['/images/course_meditation.png'],
      video: 'https://www.youtube.com/embed/pcHIiXtsD3o?si=jC0VDrSLGoOh5IDP',
      payment_link: 'https://secure.wayforpay.com/button/bc04782a4b6aa',
      slug: 'course-meditation-2.0',
      level: DifficultyLevel.MIDDLE
    },
    {
      id: 2,
      title: 'Аутогенне тренування',
      shortDescription: 'Аутогенне тренування - це суміш медитації та самогіпнозу. Курс складається з семи україномовних аудіо-уроків, які необхідно засвоювати крок за кроком.',
      description:
        'Аутогенне тренування - це суміш медитації та самогіпнозу. Курс складається з семи україномовних аудіо-уроків, які необхідно засвоювати крок за кроком.',
      price: 1,
      photos: ['/images/course_autogenic.png'],
      video: 'https://www.youtube.com/embed/TCB3o-Rog7w?si=GQxnNTbNxdRB6xUr',
      payment_link: 'https://secure.wayforpay.com/button/bc04782a4b6aa',
      slug: 'course-autogenic-training',
      level: DifficultyLevel.LIGHT
    },
    {
      id: 3,
      title: 'Інтро у йогу',
      shortDescription: 'Базовий курс, що буде корисний усім початківцям. У ньому ми поговоримо про історію йоги, її цілі та інструменти.',
      description:
        'Базовий курс, що буде корисний усім початківцям. У ньому ми поговоримо про історію йоги, її цілі та інструменти.',
      price: 1,
      photos: ['/images/course_intro.png'],
      video: 'https://www.youtube.com/embed/TCB3o-Rog7w?si=GQxnNTbNxdRB6xUr',
      payment_link: 'https://secure.wayforpay.com/button/bc04782a4b6aa',
      slug: 'course-intro',
      level: DifficultyLevel.LIGHT
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
