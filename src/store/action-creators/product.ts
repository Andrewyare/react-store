import axios from "axios";
import { Dispatch } from "redux"
import { ProductActionType } from "../../types/products"

export const fetchProducts = () => {
	return async (dispatch: Dispatch) => {
		try {
			dispatch({ type: ProductActionType.FETCH_PRODUCTS });
			const response = await axios.get("https://fakestoreapi.com/products")
			dispatch({ type: ProductActionType.FETCH_PRODUCTS_SUCCESS, payload: response.data })
		} catch (error) {
			dispatch({ type: ProductActionType.FETCH_PRODUCTS_ERROR, payload: "Error" })
		}
	}
}