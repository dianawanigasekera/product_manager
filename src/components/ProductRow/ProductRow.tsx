import React from "react";
import { Product } from "../../model/Product";

export interface Props {
  product: Product;
  onDelete: (id: number) => void;
}

class ProductRow extends React.Component<Props> {
  // renderCategoryName(category: number) {
  //   switch (category) {
  //     case 1:
  //       return "Computer";
  //     case 2:
  //       return "Cellulare";
  //     case 3:
  //       return "Tablet";
  //     case 4:
  //       return "Monitor";
  //     default:
  //       return "Not classified";
  //   }
  // }

  render() {
    const product = this.props.product;

    return (
      <tr>
        <td>{product.name}</td>
        <td>{product.categoryType}</td>
        <td>{product.date}</td>
        <td>
          {product.available ? (
            <i style={{ color: "#39ff14" }} className="fa fa-check"></i>
          ) : (
            <i style={{ color: "red" }} className="fa fa-times"></i>
          )}
        </td>
        <td>€ {product.price}</td>
        <td>
          {product.available ? (
            <button
              type="button"
              className="btn btn-outline-danger my-2 my-sm-0"
              onClick={() => this.props.onDelete(this.props.product.id)}
              style={{ marginLeft: "2px" }}
            >
              Remove
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-outline-warning my-2 my-sm-0"
            >
              Order
            </button>
          )}
        </td>
      </tr>
    );
  }
}

export default ProductRow;
