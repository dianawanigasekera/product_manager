import {categoryReducer, CategoryState} from "./category/categoryReducer";
import {productReducer, ProductState} from "./product/productReducer";
import { combineReducers, createStore} from "redux";

export interface ApplicationState {
  storage: ProductState,
  categories: CategoryState
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