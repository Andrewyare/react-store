import { CartActionType, CartState } from "../../types/cart";

export const addCartItem = (product: CartState) => {
	return { type: CartActionType.ADD_ITEM, payload: product }
}