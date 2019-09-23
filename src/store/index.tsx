import { categoryReducer } from "./category/categoryReducer";
import { productReducer } from "./product/productReducer";
import { combineReducers, createStore} from "redux";
import { Product } from "../model/Product";
import { Category } from "../model/Category";
import { ProductState } from "./product/productType";


export interface ApplicationState {
  storage: ProductState,
  categories: Category
}
// combineReducers 
export const reducers = combineReducers({
    categories: categoryReducer,
    storage: productReducer
})


export function configureStore(initialState = {}) {
    const store = createStore(reducers, initialState);  
    return store;
  }
//store
export const store = configureStore();