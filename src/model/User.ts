export interface User {
	id: number,
	name: string,
	email: string,
	password: string,
	repeatPassword: string,
	showMessage?: boolean
}