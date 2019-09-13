import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Confirm from './Confirm';

describe('Confirm', () => {
  let props;
  let shallowConfirm;
  let renderedConfirm;
  let mountedConfirm;

  const shallowTestComponent = () => {
    if (!shallowConfirm) {
      shallowConfirm = shallow(<Confirm {...props} />);
    }
    return shallowConfirm;
  };

  const renderTestComponent = () => {
    if (!renderedConfirm) {
      renderedConfirm = render(<Confirm {...props} />);
    }
    return renderedConfirm;
  };

  const mountTestComponent = () => {
    if (!mountedConfirm) {
      mountedConfirm = mount(<Confirm {...props} />);
    }
    return mountedConfirm;
  };  

  beforeEach(() => {
    props = {};
    shallowConfirm = undefined;
    renderedConfirm = undefined;
    mountedConfirm = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
