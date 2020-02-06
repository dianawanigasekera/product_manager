import React from 'react';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { store } from '../../store';

import { Product } from '../../model/Product';
import ProductTable from './ProductTable';

configure({adapter: new Adapter()});


describe('ProductRowTable', () => {
	let productTable: ShallowWrapper;
	const mockProduct: Product[] = [{
		id: 1,
		name: 'Product name',
		categoryId: 1,
		date: '23052019',
		available: false,
		price: 1235,
	}, {
		id: 2,
		name: 'Product name2',
		categoryId: 1,
		date: '23052019',
		available: false,
		price: 1235,
	}];

	const mockCategories = [{categoryId: 1, name: 'Category 1'}, {categoryId: 2, name: 'Category 2'}];

	beforeEach(() => {
		productTable = shallow(
			<Provider store={store}>
				<ProductTable products={mockProduct} categories={mockCategories}/>
			</Provider>);
	});

	it('should render a table', () => {
		productTable.find('.table table-striped').at(0);
	});

	it('should render a thead', () => {
		productTable.find('.thead-dark').at(1);
	});

	it('should render a tr', () => {
		productTable.find('tr').at(2);
	});

/*	it('should have six headers', () => {
		const headers = productTable.find('th').first;
		expect(headers.length).toEqual(1);
	});*/
});