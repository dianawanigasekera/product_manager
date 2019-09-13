import React from "react";
import { MultiProductProp } from "../../model/ProductProp";
import ProductRow from "../ProductRow";

class ProductTable extends React.Component<MultiProductProp> {
  handleDelete = (id: number) => {
    this.props.products.splice(
      this.props.products.findIndex(obj => obj.id === id),
      1
    );
    this.setState({ product: this.props.products });
  };
  render() {
    const rows = this.props.products.map(item => (
      <ProductRow key={item.id} product={item} onDelete={this.handleDelete} />
    ));

    return (
      <>
        <table className="table table-striped" style={{ marginBottom: "96px" }}>
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Available</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </>
    );
  }
}

export default ProductTable;
