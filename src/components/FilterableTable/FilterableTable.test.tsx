import React from 'react';
import { configure, mount, ReactWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilterableTable from './FilterableTable';
import { Provider } from 'react-redux';
import { store } from '../../store';


configure({adapter: new Adapter()});


describe('ProductRowTable', () => {
	let filterabeTableWrapper: ReactWrapper;

	beforeEach(() => {
		filterabeTableWrapper = mount(
			<Provider store={store}>
				<FilterableTable/>
			</Provider>);
	});

	it('should filter the table ', () => {
		filterabeTableWrapper.find('#search').simulate('change', {target: {value: 'aoc'}});

		filterabeTableWrapper.update();
		expect(filterabeTableWrapper.find('#search').props().value).toEqual('aoc');


		const td = filterabeTableWrapper.find('td').at(0);
		expect(td.text()).toEqual('AOC');

	})
});