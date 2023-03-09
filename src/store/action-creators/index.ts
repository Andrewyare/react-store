import * as ProductActionCreators from "./product"
import * as UserActionCreators from './users'
import * as CartActionCreators from './carts'

export default {
	...ProductActionCreators,
	...UserActionCreators,
	...CartActionCreators,
}
