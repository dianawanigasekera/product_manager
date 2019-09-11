import React from 'react';
import { shallow, render, mount } from 'enzyme';
import AddProductForm from './AddProductForm';

describe('AddProductForm', () => {
  let props;
  let shallowAddProductForm;
  let renderedAddProductForm;
  let mountedAddProductForm;

  const shallowTestComponent = () => {
    if (!shallowAddProductForm) {
      shallowAddProductForm = shallow(<AddProductForm {...props} />);
    }
    return shallowAddProductForm;
  };

  const renderTestComponent = () => {
    if (!renderedAddProductForm) {
      renderedAddProductForm = render(<AddProductForm {...props} />);
    }
    return renderedAddProductForm;
  };

  const mountTestComponent = () => {
    if (!mountedAddProductForm) {
      mountedAddProductForm = mount(<AddProductForm {...props} />);
    }
    return mountedAddProductForm;
  };  

  beforeEach(() => {
    props = {};
    shallowAddProductForm = undefined;
    renderedAddProductForm = undefined;
    mountedAddProductForm = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
