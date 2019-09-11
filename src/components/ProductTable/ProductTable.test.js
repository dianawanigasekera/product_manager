import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ProductTable from './ProductTable';

describe('ProductTable', () => {
  let props;
  let shallowProductTable;
  let renderedProductTable;
  let mountedProductTable;

  const shallowTestComponent = () => {
    if (!shallowProductTable) {
      shallowProductTable = shallow(<ProductTable {...props} />);
    }
    return shallowProductTable;
  };

  const renderTestComponent = () => {
    if (!renderedProductTable) {
      renderedProductTable = render(<ProductTable {...props} />);
    }
    return renderedProductTable;
  };

  const mountTestComponent = () => {
    if (!mountedProductTable) {
      mountedProductTable = mount(<ProductTable {...props} />);
    }
    return mountedProductTable;
  };  

  beforeEach(() => {
    props = {};
    shallowProductTable = undefined;
    renderedProductTable = undefined;
    mountedProductTable = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
