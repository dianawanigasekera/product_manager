import React from 'react';
import { shallow, render, mount } from 'enzyme';
import FilterBar from './FilterBar';

describe('FilterBar', () => {
  let props;
  let shallowFilterBar;
  let renderedFilterBar;
  let mountedFilterBar;

  const shallowTestComponent = () => {
    if (!shallowFilterBar) {
      shallowFilterBar = shallow(<FilterBar {...props} />);
    }
    return shallowFilterBar;
  };

  const renderTestComponent = () => {
    if (!renderedFilterBar) {
      renderedFilterBar = render(<FilterBar {...props} />);
    }
    return renderedFilterBar;
  };

  const mountTestComponent = () => {
    if (!mountedFilterBar) {
      mountedFilterBar = mount(<FilterBar {...props} />);
    }
    return mountedFilterBar;
  };  

  beforeEach(() => {
    props = {};
    shallowFilterBar = undefined;
    renderedFilterBar = undefined;
    mountedFilterBar = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
