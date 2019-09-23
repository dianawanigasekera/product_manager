import React from "react";
import AddProductForm from "../AddProductForm";
import AddCategoryForm from "../AddCategoryForm";
import FilterableTable from "../FilterableTable";
import { Product } from "../../model/Product";
import { Category } from "../../model/Category";

const initialProducts: Product[] = [
  {
    id: 1,
    categoryId: 1,
    price: 50,
    available: true,
    name: "Asus rog strix 1",
    date: ""
  },
  {
    id: 2,
    categoryId: 2,
    price: 450,
    available: true,
    name: "Iphone 6s",
    date: ""
  },
  {
    id: 3,
    categoryId: 3,
    price: 150,
    available: false,
    name: "Samsung Tab E",
    date: ""
  },
  {
    id: 4,
    categoryId: 4,
    price: 100,
    available: true,
    name: "AOC",
    date: ""
  },
  {
    id: 5,
    categoryId: 1,
    price: 50,
    available: true,
    name: "Asus rog strix 2",
    date: ""
  },
  {
    id: 6,
    categoryId: 2,
    price: 450,
    available: true,
    name: "Iphone X",
    date: ""
  },
  {
    id: 7,
    categoryId: 3,
    price: 50,
    available: false,
    name: "Samsung Tab A",
    date: ""
  },
  {
    id: 8,
    categoryId: 4,
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
}

class ProductList extends React.Component<Props, State> {
  constructor(props: State) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <AddProductForm
        />
        <AddCategoryForm
        category={categoryType}
        />
        <FilterableTable
          categories={categoryType}
        />
      </div>
    );
  }
}

export default ProductList;
