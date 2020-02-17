import React from 'react';
import { configure, mount, ReactWrapper, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AddCategoryForm from "./AddCategoryForm";
import { store } from "../../store";
import { Provider } from "react-redux";

configure({adapter: new Adapter()});

jest.useFakeTimers();

describe('ProductRowTable', () => {
    let formWrapper: ReactWrapper;
    let submit: ReactWrapper;

    beforeEach(() => {
        formWrapper = mount(
            <Provider store={store}>
                <AddCategoryForm/>
            </Provider>);
    });

    afterEach(() => {
        formWrapper.unmount();
    });

    it('should render Input Name ', () => {
        const label = formWrapper.find('label').first();
        expect(label).toHaveLength(1);
        expect(label.text()).toEqual('Name:')
    });

    it('should render Submit button ', () => {
        const form = formWrapper.find('button');
        submit = formWrapper.find('button');
        expect(form.text()).toEqual('Add Category')
    });

    it('should trigger submit button', () => {
        const submitSpy = jest.fn();
        const submit = shallow(<button onSubmit={submitSpy}/>)
        submit.simulate('submit');
        expect(submitSpy).toHaveBeenCalled();
    });

    it('should render a disable button', () => {
        expect(formWrapper.find('button').prop("disabled")).toBe(true);
    });

    it('should enable button on name input ', () => {
        //the button has to be disabled on rendering
        expect(formWrapper.find('button').prop("disabled")).toBe(true);

        const input = formWrapper.find('input');
        input.simulate('change', {target: {value: 'abc'}});
        formWrapper.update();

        //after simulation of an input it has to be active
        expect(formWrapper.find('button').prop("disabled")).toBe(false);

        //whether an input value is empty the button will be disabled again
        input.simulate('change', {target: {value: ''}});
        // forza l'aggiornamento
        formWrapper.update();

        expect(formWrapper.find('button').prop("disabled")).toBe(true);
    })
});

