import { Action } from "redux";
import { Product } from "../../model/Product";


// state
export interface ProductState {
    products: Product[];
}

// actions
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export interface AddProductAction {
    type: typeof ADD_PRODUCT;
    payload:{
        product: Product;
    }
}

export interface RemoveProductAction {
    type: typeof REMOVE_PRODUCT;
    payload:{
        id: number;
    }
}

export type ProductActionTypes =
  AddProductAction | RemoveProductAction;