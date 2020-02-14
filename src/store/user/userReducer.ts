import { User } from "../../model/User";
import { UserActionTypes, ADD_USER } from './userAction';

export interface UserState {
	user: User[];
}

const initialUser: User[] = [
	{
		id: 1,
		name: 'FirstUser',
		lastname: '',
		age: 10,
		email: '',
		password: ''
	}
];

const initialUserTypeState: UserState = {user: initialUser};

export function userReducer(state = initialUserTypeState, action:UserActionTypes) {
	switch(action.type){
		case ADD_USER:
			const userList = state.user.slice();
			const u = action.payload.user;
			const last_user = userList[userList.length -1];
			u.id = last_user.id +1;
			userList.push(u);
			return { user: userList.slice()}

		default:
			return state;

	}
}


