import React from "react";
import AddProductForm from "../AddProductForm";
import FilterableTable from "../FilterableTable";
import { Product } from "../../model/Product";
import { Category } from "../../model/Category";

const initialProducts: Product[] = [
  {
    id: 1,
    categoryId: 1,
    price: 50,
    available: true,
    name: "Asus rog strix 1"
  },
  {
    id: 2,
    categoryId: 2,
    price: 450,
    available: true,
    name: "Iphone 6s"
  },
  {
    id: 3,
    categoryId: 3,
    price: 150,
    available: false,
    name: "Samsung Tab E"
  },
  {
    id: 4,
    categoryId: 4,
    price: 100,
    available: true,
    name: "AOC"
  },
  {
    id: 5,
    categoryId: 1,
    price: 50,
    available: true,
    name: "Asus rog strix 2"
  },
  {
    id: 6,
    categoryId: 2,
    price: 450,
    available: true,
    name: "Iphone X"
  },
  {
    id: 7,
    categoryId: 3,
    price: 50,
    available: false,
    name: "Samsung Tab A"
  },
  {
    id: 8,
    categoryId: 4,
    price: 100,
    available: true,
    name: "Samsung"
  }
];

const categoryType: Category[] = [
  {
    categoryId: 1,
    name: "Computer"
  },
  {
    categoryId: 2,
    name: "Phone"
  },
  {
    categoryId: 3,
    name: "Tablet"
  },
  {
    categoryId: 4,
    name: "Monitor"
  }
];

interface Props {}
interface State {
  products: Product[];
}

class ProductList extends React.Component<Props, State> {
  constructor(props: State) {
    super(props);
    this.state = {
      products: initialProducts
    };
  }
  render() {
    return (
      <div>
        <AddProductForm
          category={categoryType}
          onAddProduct={p => {
            const products = this.state.products;
            p.id =
              1 +
              products.reduce((maxId, p) => (p.id > maxId ? p.id : maxId), 0);
            products.push(p);
            this.setState({ products: products });
            console.log("Added product", p);
          }}
        />
        <FilterableTable
          products={this.state.products}
          onDelete={id =>
            this.setState({
              products: this.state.products.filter(p => p.id !== id)
            })
          }
        />
      </div>
    );
  }
}

export default ProductList;
