import React from "react";
import AddProductForm from "../AddProductForm";
import FilterableTable from "../FilterableTable";
import { Product } from "../../model/Product";
import { Category } from "../../model/Category";
const products: Product[] = [
  {
    categoryId: 1,
    price: 50,
    available: true,
    name: "Asus rog strix 1"
  },
  {
    categoryId: 2,
    price: 450,
    available: true,
    name: "Iphone 6s"
  },
  {
    categoryId: 3,
    price: 150,
    available: false,
    name: "Samsung Tab E"
  },
  {
    categoryId: 4,
    price: 100,
    available: true,
    name: "AOC"
  },
  {
    categoryId: 1,
    price: 50,
    available: true,
    name: "Asus rog strix 2"
  },
  {
    categoryId: 2,
    price: 450,
    available: true,
    name: "Iphone X"
  },
  {
    categoryId: 3,
    price: 50,
    available: false,
    name: "Samsung Tab A"
  },
  {
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
class ProductList extends React.Component {
  render() {
    return (
      <div>
        <AddProductForm category={categoryType} />
        <FilterableTable products={products} />
      </div>
    );
  }
}

export default ProductList;
