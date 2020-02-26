import React from 'react';
import { configure, mount, ReactWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { store } from "../../store";
import { Provider } from "react-redux";
import { RegisterForm } from './RegisterForm';

configure({adapter: new Adapter()});
jest.useFakeTimers();


describe('RegisterForm', () => {
	let formWrapper: ReactWrapper;

	beforeEach(() => {
		formWrapper = mount(
			<Provider store={store}>
				<RegisterForm/>
			</Provider>);
	});

	it('should render one Form', () => {
		expect(formWrapper.find('form')).toHaveLength(1);
	});

	it('should render labels', () => {
		expect(formWrapper.find('label')).toHaveLength(4);
	});

	it('should render inputs', () => {
		expect(formWrapper.find('input')).toHaveLength(4);
	});

	it('should check that it is not empty', () => {
		const name = formWrapper.find('#name');
		name.simulate('change', {target:{value:'Diana'}});

		formWrapper.update();
		expect(formWrapper.find('#name').props().value).toEqual('Diana');
	});
});



