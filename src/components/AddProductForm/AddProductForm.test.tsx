import React from 'react';
import { configure, mount, ReactWrapper, shallow } from 'enzyme';
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

	it('should check if the form is correctly populated to enable submit button', () => {

	})


})

