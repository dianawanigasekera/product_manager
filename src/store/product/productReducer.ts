import { ProductState, ProductActionTypes, ADD_PRODUCT, REMOVE_PRODUCT } from "./productType";
import { Product } from "../../model/Product";


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

const initialProductState: ProductState = { products: initialProducts };

export function productReducer(state = initialProductState, action: ProductActionTypes): ProductState {
  switch (action.type) {
    case ADD_PRODUCT:
      const productsList = state.products.slice();
      const p = action.payload.product;
      p.id =
        1 +
        productsList.reduce((maxId, p) => (p.id > maxId ? p.id : maxId), 0);

      productsList.push(p);
      return { products: productsList };

    case REMOVE_PRODUCT:
      return {
        products: state.products.filter(p => p.id !== action.payload.id)
      };

    default:
      return state;
  }
};


