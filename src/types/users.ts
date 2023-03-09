export interface UsersState {
	users: UserState[],
	loading: boolean,
	error: null | string
}
export interface UserState {
	id: number,
	email: string,
	username: string,
	password: string,
	name: {
		firstname: string,
		lastname: string
	},
	address: {
		city: string,
		street: string,
		number: number,
		zipcode: string,
		geolocation: {
			lat: string,
			long: string
		}
	},
	phone: string
}
export enum UserActionType {
	FETCH_USERS = 'FETCH_USERS',
	FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
	FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"
}
interface FetchUsersAction {
	type: UserActionType.FETCH_USERS
}
interface FetchUsersErrorAction {
	type: UserActionType.FETCH_USERS_ERROR,
	payload: string
}
interface FetchUsersSuccessAction {
	type: UserActionType.FETCH_USERS_SUCCESS,
	payload: UserState[]
}
export type UserAction = FetchUsersAction | FetchUsersErrorAction | FetchUsersSuccessAction;