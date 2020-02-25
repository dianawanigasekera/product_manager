import { User } from "../../model/User";
import { ADD_USER, UserActionTypes, SET_USER_DATA } from './userAction';

export interface UserState {
	userData: User[];
}

const initialState: UserState = {
	userData: [],
};

// const initialUserTypeState: UserState = {userData: initialState};

export function userReducer(
	state = initialState,
	action: UserActionTypes): UserState {
	switch (action.type) {
		case SET_USER_DATA:
			const users = action.payload.users;
			return {
				...state,
				userData: users
			};

		case ADD_USER:
			const userList = state.userData;
			const lastUserId = userList.length ? userList[userList.length - 1].id : 0;
			const u = action.payload.user;
			u.id = lastUserId + 1;
			return {userData: userList.concat([u])};

		default:
			return state;

	}
}


