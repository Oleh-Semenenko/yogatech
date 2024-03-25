import type { ISelectedProduct } from '~/types'

export default function useBasket() {
  const selectedGoods: Ref<ISelectedProduct[] | []> = useState(
    'selected-goods',
    () => {
      return window?.localStorage.getItem('selectedGoods')
        ? JSON.parse(window?.localStorage.getItem('selectedGoods') as string)
        : []
    }
  )

  const addProduct = (product: ISelectedProduct) => {
    selectedGoods.value = [...selectedGoods.value, product]
    localStorage.setItem('selectedGoods', JSON.stringify(selectedGoods.value))
  }

  const removeProduct = (productId: number) => {
    selectedGoods.value = selectedGoods.value.filter(
      (product) => product.id !== productId
    )
    localStorage.setItem('selectedGoods', JSON.stringify(selectedGoods.value))
  }

  const clearBasket = () => {
    selectedGoods.value = []
  }

  const handlePayment = async (amount: number) => {
    const route = useRoute()
    const paymentLink = 'https://secure.wayforpay.com/pay'
    const link = 'https://api.wayforpay.com/api'

    const paymentOptions = {
      merchantAccount: 'test_merch_n1',
      merchantSecretKey: 'flk3409refn54t54t*FNJRET',
      merchantDomainName: 'dulcet-licorice-ce0170.netlify.app',
      merchantTransactionSecureType: 'auto',
      returnUrl: `${route.fullPath}`,
      amount: amount
    }

    const options = {
      transactionType: 'CREATE_INVOICE',
      merchantAccount: 'test_merch_n1',
      merchantAuthType: 'SimpleSignature',
      merchantDomainName: 'www.super.org',
      merchantSignature: '60c5d743b71f79abe48c7183ada4b451',
      apiVersion: 1,
      language: 'ua',
      serviceUrl: route.fullPath,
      orderReference: 'myOrder1',
      orderDate: 1421412898,
      amount: amount,
      currency: 'UAH',
      orderTimeout: 86400,
      productName: ['Samsung WB1100F', 'Samsung Galaxy Tab 4 7.0 8GB 3G Black'],
      productPrice: [1, 1],
      productCount: [1, 2],
      paymentSystems: 'card;privat24',
      clientFirstName: 'Bulba',
      clientLastName: 'Taras',
      clientEmail: 'rob@mail.com',
      clientPhone: '380556667788'
    }

    const headers: HeadersInit = {
      'Access-Control-Allow-Origin': '*'
    }

    const { data } = await useFetch(link, {
      method: 'POST',
      body: options,
      headers
    })

    console.log('data', data)
  }
  return {
    selectedGoods,
    addProduct,
    removeProduct,
    handlePayment
  }
}
