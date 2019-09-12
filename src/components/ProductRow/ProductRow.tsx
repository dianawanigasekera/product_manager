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
    return (
      <tr>
        <td>{product.name}</td>
        <td>{this.renderCategoryName(product.categoryId)}</td>
        <td>{available}</td>
        <td>€ {product.price}</td>
      </tr>
    );
  }
}

export default ProductRow;
