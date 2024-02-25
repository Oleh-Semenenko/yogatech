import type { ISelectedProduct } from "~/types";

export default function useBasket() {
  const selectedGoods: Ref<ISelectedProduct[] | []> = useState('selected-goods', () => []);

  const addProduct = (product: ISelectedProduct) => {
    selectedGoods.value = [...selectedGoods.value, product]
    console.log("selectedGoods", selectedGoods.value)
  }
  return {
    selectedGoods,
    addProduct
  }
}