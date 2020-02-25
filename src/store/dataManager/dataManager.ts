import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { User } from '../../model/User';

export class DataManager {

	loadUserList(): Observable<User[]> {
		const mockData: User = {
			id: 0,
			name: 'Diana',
			email: 'diana@domain.com',
			password: 'asdasd',
			repeatPassword: 'asdasd',
		};
		return of([mockData]).pipe(delay(500));
	}
}

export const dataManager = new DataManager();