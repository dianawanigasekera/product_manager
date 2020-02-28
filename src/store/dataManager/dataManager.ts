import { Observable, of } from 'rxjs';
import { User } from '../../model/User';
import { Category } from '../../model/Category';
import { delay } from 'rxjs/operators';


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

	loadCategoriesList(): Observable<Category[]> {
		const mockCategoryData: Category[] = [
			{
				categoryId: 1,
				name: "Computer",
			},
			{
				categoryId: 2,
				name: "Phone",
			},
			{
				categoryId: 3,
				name: "Tablet",
			},
			{
				categoryId: 4,
				name: "Monitor",
			},
		];
		return of(mockCategoryData).pipe(delay(500));
	}
}

export const dataManager = new DataManager();