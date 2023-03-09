import { UserAction, UserActionType, UsersState, UserState } from "../../types/users"

const initialState: UsersState = {
	users: [],
	loading: false,
	error: null
}
export const UserReducer = (state = initialState, action: UserAction): UsersState => {
	switch (action.type) {
		case UserActionType.FETCH_USERS:
			return { ...state, loading: true, error: null }
		case UserActionType.FETCH_USERS_ERROR:
			return { ...state, loading: false, error: action.payload }
		case UserActionType.FETCH_USERS_SUCCESS:
			return { users: action.payload, loading: false, error: null }
		default:
			return state;
	}
}