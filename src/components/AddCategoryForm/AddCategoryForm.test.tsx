import React from 'react';
import { configure, mount, ReactWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AddCategoryForm from "./AddCategoryForm";
import { store } from "../../store";
import { Provider } from "react-redux";

configure({adapter: new Adapter()});
/*jest.useFakeTimers();*/

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
        submit = formWrapper.find('button');
        submitSpy();
        submit.simulate('submit');
        formWrapper.update();
        expect(submitSpy).toHaveBeenCalled();
    })
});

