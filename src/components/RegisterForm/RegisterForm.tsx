import React from "react";
import { ApplicationState } from "../../store";
import { connect } from "react-redux";
import { User } from '../../model/User';
import { addUser } from "../../store/user/userAction";

//interface per la form
interface RegisterFormProps {
	addUser: (user: User) => void;
}

interface RegisterFormState extends User {
}

const user: User = {
	id: 0,
	name: '',
	lastname: '',
	age: 0,
	email: '',
	password: '',
	showMessage: false,

};

export class RegisterFormComponent extends React.Component<RegisterFormProps, RegisterFormState> {

	constructor(props: RegisterFormProps) {
		super(props);
		this.state = {
			...user,
		}
	}

	// my Submit Button

/*	onSubmit(e: any) {
		e.preventDefault();
		if (this.validate()) {
			let fields: any = {};
			fields['name'] = '';
			this.setState({fields: fields});
			alert('Form is submitted');
		}
	}*/

	//my Validate form
/*	validate() {
		let fields: User = this.state;
		let formIsValid = true;

		if (!fields['name']) {
			formIsValid = false;
			const errors['name'] = "Please insert a name";
		}

		this.setState({errors: errors});
		return formIsValid;
	}*/


	render() {
		const s = this.state;
		return (
			<div className="col-sm-8" style={{padding: "40px"}}>
				<form name="userForm">
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
					</div>
					<div className="form-group row">
						<div className="col-sm-2">
							<label>Lastname:</label>
						</div>
						<div className="col-sm-4">
							<input
								type="text"
								className="form-control"
								id="lastname"
								value={s.lastname}
								onChange={e => {
									this.setState({lastname: e.target.value});
								}}
								placeholder="Lastname"
							/>
						</div>
					</div>
					<div className="form-group row">
						<div className="col-sm-2">
							<label>Age:</label>
						</div>
						<div className="col-sm-4">
							<input
								type="number"
								className="form-control"
								id="age"
								value={s.age}
								onChange={e => {
									console.log(e.target);
									/*this.setState({age: e.target.});*/
								}}
								placeholder="Age"
							/>
						</div>
					</div>
					<div className="form-group row">
						<div className="col-sm-2">
							<label>Email:</label>
						</div>
						<div className="col-sm-4">
							<input
								type="email"
								className="form-control"
								id="email"
								value={s.email}
								onChange={e => {
									console.log(e.target.value);
									this.setState({email: e.target.value})
								}}
								placeholder="Email"
							/>
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
					</div>

					<div className="form-group row">
						<div className="col-sm-11">
							<button
								type="submit"
								className="btn btn-outline-primary my-2 my-sm-0"
								disabled={!this.state.name}
								onClick={(e) => {
									e.preventDefault();
									setTimeout(() => this.setState({showMessage: false}), 5000);
								}}
							>
								Register
							</button>
							<div className="form-group row" style={{marginTop: "20px"}}>
								<div className="col-sm-11">
									{this.state.showMessage ? <div className="alert alert-success" role="alert">
										Successfully added to the category list!</div> : null}
								</div>
							</div>
						</div>
					</div>
				</form>
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