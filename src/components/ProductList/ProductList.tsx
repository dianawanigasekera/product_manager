import React from "react";
import AddProductForm from "../AddProductForm";
import FilterableTable from "../FilterableTable";
import { Product } from "../../model/Product";
import { Category } from "../../model/Category";
const products: Product[] = [
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
