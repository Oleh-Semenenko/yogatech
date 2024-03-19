import type { ISelectedProduct } from '~/types'

export default function useBasket() {
  const selectedGoods: Ref<ISelectedProduct[] | []> = useState(
    'selected-goods',
    () => []
  )

  const addProduct = (product: ISelectedProduct) => {
    selectedGoods.value = [...selectedGoods.value, product]
  }

  const removeProduct = (product: ISelectedProduct) => {
    selectedGoods.value = selectedGoods.value.filter(p => p.id !== product.id)
  }

  const handlePayment = async (amount: number) => {
    const paymentLink = 'https://secure.wayforpay.com/pay'

    const paymentOptions = {
      merchantAccount: 'dulcet_licorice_ce0170_netlify_app',
      merchantDomainName: 'dulcet-licorice-ce0170.netlify.app',
      merchantTransactionSecureType: 'auto',
      returnUrl: 'https://dulcet-licorice-ce0170.netlify.app/shop',
      amount: amount
    }
  }
  return {
    selectedGoods,
    addProduct,
    removeProduct
  }
}
