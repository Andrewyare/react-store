import { ProductState } from "./products";

export interface CartsState {
	carts: CartState[],
}
export interface CartState {
	id: number,
	title: string,
	price: number,
	image: string,
	amount: number,
}
export enum CartActionType {
	ADD_ITEM = 'ADD_ITEM',
	REMOVE_ITEM = 'REMOVE_ITEM',
}
interface AddItemAction {
	type: CartActionType.ADD_ITEM
	payload: CartState
}
interface RemoveItemAction {
	type: CartActionType.REMOVE_ITEM,
	payload: number
}
export type CartAction = AddItemAction | RemoveItemAction;