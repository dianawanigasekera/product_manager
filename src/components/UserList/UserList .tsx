import React from "react";
import { ApplicationState } from "../../store";
import { connect } from "react-redux";
import { User } from '../../model/User';
import { setUserList } from "../../store/user/userAction";
import { Subscription } from 'rxjs';
import { dataManager } from "../../store/dataManager/dataManager";


//interface per la form
interface UserListProps {
	users: User[];
	setUsers: (u: User[]) => void;
}


export class UserListComponent extends React.Component<UserListProps> {
	private loadDataSubscription?: Subscription;

	componentDidMount() {
		console.log('UserListComponent initial', this.props.users);
		this.loadDataSubscription = dataManager.loadUserList().subscribe(
			u => {
				this.props.setUsers(u);
				console.log('u', this.props.users);
			},
		);
	}

	componentWillUnmount() {
		if (this.loadDataSubscription) {
			this.loadDataSubscription.unsubscribe();
		}
	}

	render() {
		const p = this.props.users;
		return (
			<table className="table table-striped" style={{marginBottom: "96px"}}>
				<thead className="thead-dark">
				<tr>
					<th>Name</th>
					<th>Email</th>
				</tr>
				</thead>
				{p.map(user => (
					<tr>
						<td>{user.name}</td>
						<td>{user.email}</td>
					</tr>
				))}
			</table>
		)
	}
}

function mapStateToProps(state: ApplicationState) {
	return {
		users: state.userStorage.userData,
	}
}

function mapDispatchToProps(dispatch: any) {
	return {
		setUsers: (u: User[]) => dispatch(setUserList(u)),
	}
}

export const UserList = connect(mapStateToProps, mapDispatchToProps)(UserListComponent);