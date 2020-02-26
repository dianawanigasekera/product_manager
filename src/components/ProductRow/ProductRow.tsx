import React from "react";
import { Product } from "../../model/Product";
import { Category } from "../../model/Category";

export interface Props {
    product: Product;
    categories: Category[];
    onDelete: (id: number) => void;
}

class ProductRow extends React.Component<Props> {
    getCategoryName(categoryId: number) {
        const cat = this.props.categories.find(c => c.categoryId === categoryId);
        return cat ? cat.name : "Not classified";
    }

    render() {
        const p = this.props;
        const green = "#39ff14";
        const red = "#dc3545";

        return (
            <tr>
                <td><a href={"/product/" + p.product}>{p.product.name}</a></td>
                <td>{this.getCategoryName(p.product.categoryId)}</td>
                <td>{p.product.date}</td>
                <td>
                    {p.product.available ?
                        <i style={{color: green}} className="fa fa-check"/>
                    :
                        <i style={{color: red}} className="fa fa-times"/>
                    }
                </td>
                <td>€ {p.product.price}</td>
                <td>
                    {p.product.available ? (
                        <button
                            type="button"
                            className="btn btn-outline-danger my-2 my-sm-0"
                            onClick={() => p.onDelete(p.product.id)}
                            style={{marginLeft: "2px"}}
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
