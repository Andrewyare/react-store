import { CartAction, CartActionType, CartsState } from "../../types/cart";

const initialState: CartsState = {
	carts: []
}

export const CartReducer = (state = initialState, action: CartAction): CartsState => {
	switch (action.type) {
		case CartActionType.ADD_ITEM:
			return {
				carts: state.carts.length > 0 ?
					state.carts.find(cart => cart.id === action.payload.id) ?
						[...state.carts.map(cart => cart.id === action.payload.id ?
							{ ...cart, amount: cart.amount + 1 } : cart)]
						: [...state.carts, action.payload]
					: [...state.carts, action.payload]
			}
		case CartActionType.REMOVE_ITEM:
			return { carts: [...state.carts.filter(cart => cart.id !== action.payload)] }
		default:
			return state
	}

}