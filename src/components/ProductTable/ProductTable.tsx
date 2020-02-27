import React from "react";
import ProductRow from "../ProductRow";
import { Product } from "../../model/Product";
import { Category } from "../../model/Category";
import { ApplicationState } from "../../store";
import { connect } from "react-redux";
import {removeProduct} from "../../store/product/productActions"

interface Props {
  products: Product[];
  categories: Category[];
  onDelete: (id: number) => void;
}

class ProductTableComponent extends React.Component<Props> {
  render() {
    const p = this.props;

    return (
      <table className="table table-striped" style={{ marginBottom: "96px" }}>
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Date</th>
            <th>Available</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {p.products.map(item => (
            <ProductRow
              key={item.id}
              product={item}
              categories={p.categories}
              onDelete={p.onDelete}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state: ApplicationState) {
  return {
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    onDelete: (id: number) => dispatch(removeProduct(id)), 
  };
}

const ProductTable = connect(mapStateToProps, mapDispatchToProps)(ProductTableComponent);

export default ProductTable;
