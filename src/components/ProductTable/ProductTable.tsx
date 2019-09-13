import React from "react";
import { MultiProductProp } from "../../model/ProductProp";
import ProductRow from "../ProductRow";

class ProductTable extends React.Component<MultiProductProp> {
  render() {
    const lines = this.props.products.map(item => (
      <ProductRow key={item.id} product={item} />
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
            </tr>
          </thead>
          <tbody>{lines}</tbody>
        </table>
      </>
    );
  }
}

export default ProductTable;
