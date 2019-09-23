import { Product } from "../../model/Product";
import { AddProductAction, ADD_PRODUCT, REMOVE_PRODUCT } from "./productType";
import { RemoveProductAction } from "./productType";


export function addProduct(product: Product): AddProductAction {
  return {
    type: ADD_PRODUCT,
    payload: {
        product: product,
    },
  };
}

export function removeProduct(id: number): RemoveProductAction {
  return {
    type: REMOVE_PRODUCT,
    payload: {
      id: id,
    },
  };
}

