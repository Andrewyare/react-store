import axios from "axios";
import { Dispatch } from "redux"
import { UserActionType } from "../../types/users"

export const fetchUsers = () => {
	return async (dispatch: Dispatch) => {
		try {
			dispatch({ type: UserActionType.FETCH_USERS });
			const response = await axios.get('https://fakestoreapi.com/users')
			dispatch({ type: UserActionType.FETCH_USERS_SUCCESS, payload: response.data })
		} catch (error) {
			dispatch({ type: UserActionType.FETCH_USERS_ERROR, payload: "error" })
		}
	}
}