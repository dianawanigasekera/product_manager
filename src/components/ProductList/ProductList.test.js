import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ProductList from './ProductList';

describe('ProductList', () => {
  let props;
  let shallowProductList;
  let renderedProductList;
  let mountedProductList;

  const shallowTestComponent = () => {
    if (!shallowProductList) {
      shallowProductList = shallow(<ProductList {...props} />);
    }
    return shallowProductList;
  };

  const renderTestComponent = () => {
    if (!renderedProductList) {
      renderedProductList = render(<ProductList {...props} />);
    }
    return renderedProductList;
  };

  const mountTestComponent = () => {
    if (!mountedProductList) {
      mountedProductList = mount(<ProductList {...props} />);
    }
    return mountedProductList;
  };  

  beforeEach(() => {
    props = {};
    shallowProductList = undefined;
    renderedProductList = undefined;
    mountedProductList = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
