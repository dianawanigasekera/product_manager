import React from 'react';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FilterBar from './FilterBar';
import ProductRow from '../ProductRow';
import { Product } from '../../model/Product';

jest.useFakeTimers();
configure({adapter: new Adapter()});


describe('FilterBar', () => {
	let filterBar: ShallowWrapper;

	let deleteCount = 0;
	let productRow: ShallowWrapper;
	const mockProduct: Product = {
		id: 1,
		name: 'Product name',
		categoryId: 1,
		date: '23052019',
		available: true,
		price: 1235,
	};

	const mockCategories = [{categoryId: 1, name: 'Category 1'}, {categoryId: 2, name: 'Category 2'}];

	beforeEach(() => {
		filterBar = shallow(<FilterBar onChange={() => {
		}}/>)
		productRow = shallow(<ProductRow product={mockProduct} categories={mockCategories} onDelete={() => {
				deleteCount++;
			}}/>,
		);
	});

	it('should have an input search', () => {
		const input = filterBar.find('input');
		expect(input).toBeTruthy();
	});

	it('should have a form', () => {
		const inputForm = filterBar.find('form');
		expect(inputForm).toBeTruthy();
	});

	it('should check input value', () => {
		expect(filterBar.exists()).toBe(true);

		const filterBarInput = filterBar.find('input');
		filterBarInput.simulate('change', {target: {value: 'a'}});

		filterBar.update();
		productRow.update();


		/*		expect(filterBarInput.props().value).toEqual('a');*/
	});

	/*	it('should change the state componentState componentDidMount ', () => {
			expect(filterBar.state('componentState')).toEqual('mounted');
		});*/

});
