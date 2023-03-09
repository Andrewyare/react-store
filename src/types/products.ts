export interface ProductsState {
	products: ProductState[],
	loading: boolean,
	error: null | string
}
export interface ProductState {
	id: number,
	title: string,
	price: number,
	category: string,
	description: string,
	image: string
}
export enum ProductActionType {
	FETCH_PRODUCTS = 'FETCH_PRODUCTS',
	FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR',
	FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
}
interface FetchProductsAction {
	type: ProductActionType.FETCH_PRODUCTS
}
interface FetchProductsErrorAction {
	type: ProductActionType.FETCH_PRODUCTS_ERROR,
	payload: string
}
interface FetchProductsSuccessAction {
	type: ProductActionType.FETCH_PRODUCTS_SUCCESS,
	payload: ProductState[]
}
export type ProductAction = FetchProductsAction | FetchProductsErrorAction | FetchProductsSuccessAction;