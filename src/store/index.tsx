import {categoryReducer, CategoryState} from "./category/categoryReducer";
import {productReducer, ProductState} from "./product/productReducer";
import {userReducer, UserState} from "./user/userReducer";
import { combineReducers, createStore} from "redux";

export interface ApplicationState {
  products: ProductState,
  categories: CategoryState,
  users: UserState,
}
// combineReducers 
export const reducers = combineReducers({
    categories: categoryReducer,
    products: productReducer,
    users: userReducer
})


export function configureStore(initialState = {}) {
    const store = createStore(reducers, initialState);  
    return store;
  }
//store
export const store = configureStore();