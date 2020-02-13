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
        expect(header.find('.navbar navbar-expand-lg navbar-dark bg-dark').at(0));
    });

    it('should render a button', () => {
        expect(header.find('button')).toHaveLength(1);
    });

    it(' should render collapse navbar', () => {
       const navbar = header.find('.navbar-brand');
       expect(navbar.text()).toEqual('Product Manager')
    });

    it(' should render the nav link Product', () => {
        const navLink = header.find('.nav-link').first();
        expect(navLink.text()).toEqual('Product');
    });

    it(' should render the nav link Category', () => {
        const navLink = header.find('.nav-link').at(1);
        expect(navLink.text()).toEqual('Category');
    });

    it(' should render the nav link List', () => {
        const navLink = header.find('.nav-link').at(2);
        expect(navLink.text()).toEqual('List');
    });

/*    it(' should click on nav link Product', () => {
        const linkSpy = jest.fn();
        const navLink = header.find('.nav-link').first();
        navLink.simulate('click');
        expect(linkSpy).toHaveBeenCalled();
    });*/
});