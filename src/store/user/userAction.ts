import { User } from "../../model/User";


export const ADD_USER= 'ADD_USER';


export function addUser(user: User){
	return{
		type:ADD_USER as typeof  ADD_USER,
		payload: {
			user: user,
		},
	};
}

export type UserActionTypes = ReturnType<typeof addUser>;
