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
		this.loadDataSubscription = dataManager.loadUserList().subscribe(
			u => {
				this.props.setUsers(u);
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
				<tbody>
				{p.map((user) => (
					<tr key={user.id}>
						<td>{user.name}</td>
						<td >{user.email}</td>
					</tr>
				))}
				</tbody>
			</table>
		)
	}
}

function mapStateToProps(state: ApplicationState) {
	return {
		users: state.users.userData,
	}
}

function mapDispatchToProps(dispatch: any) {
	return {
		setUsers: (u: User[]) => dispatch(setUserList(u)),
	}
}

export const UserList = connect(mapStateToProps, mapDispatchToProps)(UserListComponent);