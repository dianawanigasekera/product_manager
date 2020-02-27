import { Observable } from 'rxjs';
import { User } from '../../model/User';

export class DataManager {

	loadUserList() {
		let userList: Observable<User[]>;

		// Si potrebbe usare un wrap per trasformare un promise ad un observable usando la libreria axios js
		// header, cookies, interceptors

		userList = new Observable<User[]>(subscriber => {
			fetch('https://jsonplaceholder.typicode.com/users')
				.then(response => response.json())
				.then(users => {
					subscriber.next(users);
					subscriber.complete();
				})
		});
		return userList;
	}

/*		loadUserList(): Observable<User[]> {
		const mockData: User = {
			id: 0,
			name: 'Diana',
			email: 'diana@domain.com',
			password: 'asdasd',
			repeatPassword: 'asdasd',
		};
		return of([mockData]).pipe(delay(500));
	}*/

}

export const dataManager = new DataManager();