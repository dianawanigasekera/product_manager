import React from 'react';
import { configure, mount, ReactWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { store } from "../../store";
import { Provider } from "react-redux";
import AddProductForm from './AddProductForm';

configure({adapter: new Adapter()});
jest.useFakeTimers();


describe('AddProductForm', () => {
	let formWrapper: ReactWrapper;

	beforeEach(() => {
		formWrapper = mount(
			<Provider store={store}>
				<AddProductForm/>
			</Provider>);
	});

	afterEach(() => {
		formWrapper.unmount();
	})


	it('should render one Form', () => {
		expect(formWrapper.find('form')).toHaveLength(1);
	});

	it('should render labels', () => {
		expect(formWrapper.find('label')).toHaveLength(4);
	});

	it('should render inputs', () => {
		expect(formWrapper.find('input')).toHaveLength(3);
	});

	it('should render a submit button disabled', () => {
		expect(formWrapper.find('button').prop('disabled')).toBe(true);
	});

	it('Should check the form', () => {
		expect(formWrapper.find('button').prop("disabled")).toBe(true);

		const name = formWrapper.find('input').first();
		const available = formWrapper.find('input').at(1)
		const price = formWrapper.find('input').at(2);
		const category = formWrapper.find('select');

		name.simulate('change', {target: {value: 'abc'}});
		category.simulate('change', {target: {value: '1'}});
		price.simulate('change', {target: {value: '45'}});
		available.simulate('change', {target: {value: true}});

		formWrapper.update();


		expect(formWrapper.find('button').prop("disabled")).toBe(false);

		name.simulate('change', {target: {value: ''}});
		category.simulate('change', {target: {value: ''}});
		price.simulate('change', {target: {value: ''}});
		available.simulate('change', {target: {value: false}});

		formWrapper.update();

		expect(formWrapper.find('button').prop("disabled")).toBe(true);

	})
})



