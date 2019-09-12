import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ProductHeader from './ProductHeader';

describe('ProductHeader', () => {
  let props;
  let shallowProductHeader;
  let renderedProductHeader;
  let mountedProductHeader;

  const shallowTestComponent = () => {
    if (!shallowProductHeader) {
      shallowProductHeader = shallow(<ProductHeader {...props} />);
    }
    return shallowProductHeader;
  };

  const renderTestComponent = () => {
    if (!renderedProductHeader) {
      renderedProductHeader = render(<ProductHeader {...props} />);
    }
    return renderedProductHeader;
  };

  const mountTestComponent = () => {
    if (!mountedProductHeader) {
      mountedProductHeader = mount(<ProductHeader {...props} />);
    }
    return mountedProductHeader;
  };  

  beforeEach(() => {
    props = {};
    shallowProductHeader = undefined;
    renderedProductHeader = undefined;
    mountedProductHeader = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
