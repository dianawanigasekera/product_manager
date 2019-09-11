import React from 'react';
import { shallow, render, mount } from 'enzyme';
import FilterableTable from './FilterableTable';

describe('FilterableTable', () => {
  let props;
  let shallowFilterableTable;
  let renderedFilterableTable;
  let mountedFilterableTable;

  const shallowTestComponent = () => {
    if (!shallowFilterableTable) {
      shallowFilterableTable = shallow(<FilterableTable {...props} />);
    }
    return shallowFilterableTable;
  };

  const renderTestComponent = () => {
    if (!renderedFilterableTable) {
      renderedFilterableTable = render(<FilterableTable {...props} />);
    }
    return renderedFilterableTable;
  };

  const mountTestComponent = () => {
    if (!mountedFilterableTable) {
      mountedFilterableTable = mount(<FilterableTable {...props} />);
    }
    return mountedFilterableTable;
  };  

  beforeEach(() => {
    props = {};
    shallowFilterableTable = undefined;
    renderedFilterableTable = undefined;
    mountedFilterableTable = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
