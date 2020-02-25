import { User } from "../../model/User";


export const ADD_USER = 'ADD_USER';


export function addUser(user: User) {
	return {
		type: ADD_USER as typeof ADD_USER,
		payload: {
			user: user,
		},
	};
}

export const SET_USER_DATA = 'SET_USER_DATA';

export function setUserList(users: User[]) {
	return {
		type: SET_USER_DATA as typeof SET_USER_DATA,
		payload: {
			users: users,
		},
	};
}

export type UserActionTypes = ReturnType<typeof addUser>
	| ReturnType<typeof setUserList>
