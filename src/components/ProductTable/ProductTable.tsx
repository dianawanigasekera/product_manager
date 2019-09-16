import React from "react";
import ProductRow from "../ProductRow";
import { Product } from "../../model/Product";

interface Props {
  products: Product[];
  onDelete: (id: number) => void;
}

class ProductTable extends React.Component<Props> {
  render() {
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
          {this.props.products.map(item => (
            <ProductRow
              key={item.id}
              product={item}
              onDelete={this.props.onDelete}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

export default ProductTable;
