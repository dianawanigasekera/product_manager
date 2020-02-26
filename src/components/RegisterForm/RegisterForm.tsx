import React from "react";
import { ApplicationState } from "../../store";
import { connect } from "react-redux";
import { User } from '../../model/User';
import { addUser } from "../../store/user/userAction";
import { UserList } from '../UserList/UserList ';

export interface Errors {
	[key: string]: string;
}

const user: User = {
	id: 0,
	name: '',
	email: '',
	password: '',
	repeatPassword: '',
	showMessage: false,
};

//interface per la form
interface RegisterFormProps {
	addUser: (user: User) => void;
}

interface RegisterFormState extends User {
	errors?: Errors;
}

export class RegisterFormComponent extends React.Component<RegisterFormProps, RegisterFormState> {
	constructor(props: RegisterFormProps) {
		super(props);
		this.state = {
			...user,
		}
	}

	validateRegistrationForm() {
		const user: User = this.state;
		const errors: Errors = {};

		if (!user.name || user.name.length < 3) {
			errors.name = 'Specify a valid user name';
		}

		if (!user.email) {
			errors.email = 'Please enter an e mail address '
		}

		const m = user.email.match(/^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i);
		if (!m) {
			errors.email = 'Please enter a valid e mail address..'
		}

		if (!user.password) {
			errors.password = 'Please enter a valid password..'
		}

		if (!user.password || !user.password.match(/^.*[a-z]$/)) {
			errors.password = 'Please enter a secure password..'
		}

		if (!user.repeatPassword) {
			errors.repeatPassword = 'Please enter a valid password..'
		}

		if (!user.repeatPassword || !user.repeatPassword.match(/^.*[a-z]$/)) {
			errors.repeatPassword = 'Please enter a secure password..'
		}

		if (!(user.password === user.repeatPassword)) {
			errors.repeatPassword = "Password doesn't match"
		}

		// controllo se l'elenco delle chiavi errors è vuoto per ripulire lo state
		if (Object.keys(errors).length === 0) {
			this.setState({errors: undefined});
			return true;
		} else {
			this.setState({errors: errors});
			return false;
		}
	}

	// add user
	addUser() {
		if (this.validateRegistrationForm()) {
			this.props.addUser({
				...this.state,
			});

			this.setState({
				...user,
				showMessage: true,
			});
			setTimeout(() => this.setState({showMessage: false}), 5000);
		}
	}

	render() {
		const s = this.state;

		return (
			<div className="col-sm-8" style={{padding: "40px"}}>
				<form name="userForm" onSubmit={e => {
					e.preventDefault();
					this.addUser();
				}}>
					<div className="form-group row">
						<div className="col-sm-2">
							<label>Name:</label>
						</div>
						<div className="col-sm-4">
							<input
								type="text"
								className="form-control"
								id="name"
								value={s.name}
								onChange={e => {
									this.setState({name: e.target.value});
								}}
								placeholder="Name"
							/>
						</div>
						<div className="col-sm-11">
							{s.errors && s.errors.name &&
                            <div className="alert alert-danger" role="alert" style={{marginTop: '10px'}}>
								{s.errors.name}</div>
							}
						</div>
					</div>
					<div className="form-group row">
						<div className="col-sm-2">
							<label>Email:</label>
						</div>
						<div className="col-sm-4">
							<input
								type="text"
								className="form-control"
								id="email"
								value={s.email}
								onChange={e => {
									this.setState({email: e.target.value});
								}}
								placeholder="Email"
							/>
						</div>
						<div className="col-sm-11">
							{s.errors && s.errors.email &&
                            <div className="alert alert-danger" role="alert" style={{marginTop: '10px'}}>
								{s.errors.email}</div>
							}
						</div>
					</div>
					<div className="form-group row">
						<div className="col-sm-2">
							<label>Password:</label>
						</div>
						<div className="col-sm-4">
							<input
								type="password"
								className="form-control"
								id="password"
								value={s.password}
								onChange={e => {
									this.setState({password: e.target.value});
								}}
								placeholder="Password"
							/>
						</div>
						<div className="col-sm-11">
							{s.errors && s.errors.password &&
                            <div className="alert alert-danger" role="alert" style={{marginTop: '10px'}}>
								{s.errors.password}</div>
							}
						</div>
					</div>
					<div className="form-group row">
						<div className="col-sm-2">
							<label>Repeat Password :</label>
						</div>
						<div className="col-sm-4">
							<input
								type="password"
								className="form-control"
								id="repeatPassword"
								value={s.repeatPassword}
								onChange={e => {
									this.setState({repeatPassword: e.target.value});
								}}
								placeholder="Password"
							/>
						</div>
						<div className="col-sm-11">
							{s.errors && s.errors.repeatPassword &&
                            <div className="alert alert-danger" role="alert" style={{marginTop: '10px'}}>
								{s.errors.repeatPassword}</div>
							}
						</div>
					</div>
					<div className="form-group row">
						<div className="col-sm-11">
							<button
								type="submit"
								className="btn btn-outline-primary my-2 my-sm-0"
							>Register
							</button>
							<div className="form-group row" style={{marginTop: "20px"}}>
								<div className="col-sm-11">
									{s.showMessage ? <div className="alert alert-success" role="alert">
										Successfully added to the users list!</div> : null}
								</div>
							</div>
						</div>
					</div>
				</form>
				<UserList/>
			</div>
		)
	}
}

function mapStateToProps(state: ApplicationState) {
	return {}
}

function mapDispatchToProps(dispatch: any) {
	return {
		addUser: (u: User) => dispatch(addUser(u)),
	}
}

export const RegisterForm = connect(mapStateToProps, mapDispatchToProps)(RegisterFormComponent);