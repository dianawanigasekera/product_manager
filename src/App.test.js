import React from 'react';
import expect from 'expect';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from "./App";

configure({adapter: new Adapter()});
describe('app and header', () => {
    let app;

    beforeEach(() => {
        //monta solo il singolo componente App, con mount monto
        app = shallow(<App/>);
    });

    it(' has a container class', () => {
        expect(app.find('.container').at(0));
    });
    it('has a container-fluid class', () => {
        expect(app.find('.container-fluid').at(1));
    });
        it('has the Header', () => {
        expect(app.find('.container-fluid').at(1));
    });

    /*    it('The header should be a dark header ', () => {
            app.find('.navbar navbar-expand-lg navbar-dark bg-dark').at(0);
        });

        it('should render a button', () => {
            expect(header.find('button')).toHaveLength(1);
        });

        it(' should render for Link"', () => {
            expect(header.find('button')).toHaveLength(4);
        });*/
});