import React from "react";
import { ProductProp } from "../../model/ProductProp";

class ProductRow extends React.Component<ProductProp> {
  renderCategoryName(category: number) {
    switch (category) {
      case 1:
        return "Computer";
      case 2:
        return "Cellulare";
      case 3:
        return "Tablet";
      case 4:
        return "Monitor";
      default:
        return "Not classified";
    }
  }
  render() {
    const product = this.props.product;
    //check whether is available or not
    const available = product.available ? (
      <span>
        <i style={{ color: "#39ff14" }} className="fa fa-check"></i>
      </span>
    ) : (
      <span>
        <i style={{ color: "red" }} className="fa fa-times"></i>
      </span>
    );
    const action_button = product.available ? (
      <button type="button" className="btn btn-danger">
        Remove
      </button>
    ) : (
      <button type="button" className="btn btn-warning">
        Order
      </button>
    );
    return (
      <tr>
        <td>{product.name}</td>
        <td>{this.renderCategoryName(product.categoryId)}</td>
        <td>{available}</td>
        <td>€ {product.price}</td>
        <td>
          {" "}
          <td>{action_button}</td>
        </td>
      </tr>
    );
  }
}

export default ProductRow;
