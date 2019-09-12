import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ProductRow from './ProductRow';

describe('ProductRow', () => {
  let props;
  let shallowProductRow;
  let renderedProductRow;
  let mountedProductRow;

  const shallowTestComponent = () => {
    if (!shallowProductRow) {
      shallowProductRow = shallow(<ProductRow {...props} />);
    }
    return shallowProductRow;
  };

  const renderTestComponent = () => {
    if (!renderedProductRow) {
      renderedProductRow = render(<ProductRow {...props} />);
    }
    return renderedProductRow;
  };

  const mountTestComponent = () => {
    if (!mountedProductRow) {
      mountedProductRow = mount(<ProductRow {...props} />);
    }
    return mountedProductRow;
  };  

  beforeEach(() => {
    props = {};
    shallowProductRow = undefined;
    renderedProductRow = undefined;
    mountedProductRow = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
