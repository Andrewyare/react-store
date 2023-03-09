import { combineReducers } from "redux";
import { CartReducer } from "./CartReducer";
import { ProductReducer } from "./ProductsReducer";
import { UserReducer } from "./UserReducer";

export const rootReducer = combineReducers({
	product: ProductReducer,
	users: UserReducer,
	carts: CartReducer,
});

export type RootState = ReturnType<typeof rootReducer>