import React from "react";
import AddProductForm from "../AddProductForm";
import FilterableTable from "../FilterableTable";
import { Product } from "../../model/Product";
import { Category } from "../../model/Category";

const initialProducts: Product[] = [
  {
    id: 1,
    categoryId: 1,
    categoryType: "Computer",
    price: 50,
    available: true,
    name: "Asus rog strix 1",
    date: ""
  },
  {
    id: 2,
    categoryId: 2,
    categoryType: "Phone",
    price: 450,
    available: true,
    name: "Iphone 6s",
    date: ""
  },
  {
    id: 3,
    categoryId: 3,
    categoryType: "Tablet",
    price: 150,
    available: false,
    name: "Samsung Tab E",
    date: ""
  },
  {
    id: 4,
    categoryId: 4,
    categoryType: "Monitor",
    price: 100,
    available: true,
    name: "AOC",
    date: ""
  },
  {
    id: 5,
    categoryId: 1,
    categoryType: "Computer",
    price: 50,
    available: true,
    name: "Asus rog strix 2",
    date: ""
  },
  {
    id: 6,
    categoryId: 2,
    categoryType: "Phone",
    price: 450,
    available: true,
    name: "Iphone X",
    date: ""
  },
  {
    id: 7,
    categoryId: 3,
    categoryType: "Tablet",
    price: 50,
    available: false,
    name: "Samsung Tab A",
    date: ""
  },
  {
    id: 8,
    categoryId: 4,
    categoryType: "Monitor",
    price: 100,
    available: true,
    name: "Samsung",
    date: ""
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
