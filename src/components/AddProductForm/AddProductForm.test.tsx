import React from 'react';
import { configure, mount, ReactWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { store } from "../../store";
import { Provider } from "react-redux";
import AddProductForm from './AddProductForm';

configure({adapter: new Adapter()});

describe('AddProductForm', () => {
	let productFormWrapper: ReactWrapper;

	beforeEach(() => {
		productFormWrapper = mount(
			<Provider store={store}>
				<AddProductForm/>
			</Provider>);
	});

	afterEach(() => {
		productFormWrapper.unmount();
	})

})

configure({adapter: new Adapter()});

describe('AddProductForm', () => {
	let productFormWrapper: ReactWrapper;

	beforeEach(() => {
		productFormWrapper = mount(
			<Provider store={store}>
				<AddProductForm/>
			</Provider>);
	});

	afterEach(() => {
		productFormWrapper.unmount();
	});

	it('should render one Form', () => {
		expect(productFormWrapper.find('form')).toHaveLength(1);
	});

	it('should render labels', () => {
		expect(productFormWrapper.find('label')).toHaveLength(4);
	});

	it('should render inputs', () => {
		expect(productFormWrapper.find('input')).toHaveLength(3);
	});

	it('should render a submit button disabled', () => {
		expect(productFormWrapper.find('button').prop('disabled')).toBe(true);
	});

/*	it('should check if the form is correctly populated to enable the submit button', () => {
		const productnameInput = productFormWrapper.find('input').at(0);
		const priceInput = productFormWrapper.find('input').at(2);
		const available = productFormWrapper.find('.form-control').at(1);
		const productSubmit = productFormWrapper.find('button');

		expect(productSubmit.prop('disabled')).toBe(true);

		available.simulate('change', {target: {value: true}});
		productFormWrapper.update();

		expect(productSubmit.prop('disabled')).toBe(false);
	});*/

})

