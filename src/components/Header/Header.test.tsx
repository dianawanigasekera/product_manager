import React from 'react';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from "./Header";

configure({adapter: new Adapter()});
describe('app and header', () => {
    let header: ShallowWrapper;

    beforeEach(() => {

        header = shallow(<Header/>);
    });

    it('The header should be a dark header ', () => {
        header.find('.navbar navbar-expand-lg navbar-dark bg-dark').at(0);
    });

    it('should render a button', () => {
        expect(header.find('button')).toHaveLength(1);
    });

    it(' should render for Link"', () => {
        expect(header.find('button')).toHaveLength(1);
    });
});