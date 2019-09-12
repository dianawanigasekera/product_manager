import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductHeader.scss';

const ProductHeader = props => (
	<div>This is a component called ProductHeader.</div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class ProductHeader extends React.Component {
//   render() {
//     return <div>This is a component called ProductHeader.</div>;
//   }
// }

const ProductHeaderPropTypes = {
	// always use prop types!
};

ProductHeader.propTypes = ProductHeaderPropTypes;

export default ProductHeader;
