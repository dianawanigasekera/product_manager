import React from 'react';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProductRow from "./ProductRow";
import { Product } from '../../model/Product';

configure({adapter: new Adapter()});


describe('ProductRowTable', () => {
    let productRow: ShallowWrapper;
    const mockProduct: Product = {
        id: 1,
        name: 'Product name',
        categoryId: 1,
        date: '23052019',
        available: false,
        price: 1235,
    };

    const mockCategories = [{categoryId: 1, name: 'Category 1'}, {categoryId: 2, name: 'Category 2'}];

    beforeEach(() => {
        productRow = shallow(<ProductRow product={mockProduct} categories={mockCategories} onDelete={() => {
        }}/>);
    });

    it('should have six cells', () => {
        const cells = productRow.find('td');
        expect(cells.length).toEqual(6);
    });

    it('should choose the right category name', () => {
        const categoryCell = productRow.find('td').at(1);
        expect(categoryCell.text()).toEqual('Category 1');
    });

    it('should choose the right category name', () => {
        const availableProduct = productRow.find('td').at(3);
        expect(availableProduct).toBeTruthy();
    });

    it('should render a button', () => {
        const actionButton = productRow.find('td').at(5);
         expect(actionButton.find('button')).toHaveLength(1);
    });

});