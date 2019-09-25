import { Product } from "../../model/Product";


export const ADD_PRODUCT = 'ADD_PRODUCT';
export function addProduct(product: Product) {
  return {
    type: ADD_PRODUCT as typeof ADD_PRODUCT,  // avoid widening to type string
    payload: {
        product: product,
    },
  };
}


export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export function removeProduct(id: number) {
  return {
    type: REMOVE_PRODUCT as typeof REMOVE_PRODUCT,  // avoid widening to type string
    payload: {
      id: id,
    },
  };
}

export type ProductActionTypes =
  ReturnType<typeof addProduct> | ReturnType<typeof removeProduct>;