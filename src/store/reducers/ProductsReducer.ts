import { ProductAction, ProductActionType, ProductsState } from "../../types/products"

const initialState: ProductsState = {
	products: [],
	loading: false,
	error: null
}
export const ProductReducer = (state = initialState, action: ProductAction): ProductsState => {
	switch (action.type) {
		case ProductActionType.FETCH_PRODUCTS:
			return { products: [], loading: true, error: null }
		case ProductActionType.FETCH_PRODUCTS_ERROR:
			return { ...state, error: action.payload }
		case ProductActionType.FETCH_PRODUCTS_SUCCESS:
			return { products: action.payload, error: null, loading: false }
		default:
			return state;
	}
}