import React from 'react';
import { configure, mount, ReactWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { of } from 'rxjs';


import { UserList } from './UserList ';
import { User } from '../../model/User';
import { dataManager } from '../../store/dataManager/dataManager';
import { ApplicationState } from '../../store';

configure({adapter: new Adapter()});


describe('UsersList', () => {
	const mockStore = configureStore();
	let wrapper: ReactWrapper;
	let loadUserListSpy: jest.SpyInstance;

	const mockUsersList: User[] = [{
		id: 0,
		name: 'Diana',
		email: 'diana@domain.com',
		password: 'asdasd',
		repeatPassword: 'asdasd',
	}];

	const mockInitialState: Partial<ApplicationState> = {
		users: {
			userData: mockUsersList,
		},
	};

	beforeEach(() => {
		loadUserListSpy = jest.spyOn(dataManager, 'loadUserList')
			.mockReturnValue(of([{
				id: 0,
				name: "Test Name",
				email: 'testname',
				password: 'xxx',
				repeatPassword: 'xxx',
			}]));

		const store: any = mockStore(mockInitialState);
		wrapper = mount(
			<Provider store={store}>
				<UserList/>
			</Provider>);
	});

	afterEach(() => {
		loadUserListSpy.mockClear();
		wrapper.unmount();
	});

	it('init should call dataManager and .loadUserList', () => {
		expect(loadUserListSpy).toBeCalledTimes(1);
	});

	it('should clear loadUserList and return undefined ', () => {
		expect(loadUserListSpy).not.toBeUndefined();
	});
});



