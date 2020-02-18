import {categoryReducer, CategoryState} from "./category/categoryReducer";
import {productReducer, ProductState} from "./product/productReducer";
import {userReducer, UserState} from "./user/userReducer";
import { combineReducers, createStore} from "redux";

export interface ApplicationState {
  storage: ProductState,
  categories: CategoryState,
  userStorage: UserState,
}
// combineReducers 
export const reducers = combineReducers({
    categories: categoryReducer,
    storage: productReducer,
    userStorage: userReducer
})


export function configureStore(initialState = {}) {
    const store = createStore(reducers, initialState);  
    return store;
  }
//store
export const store = configureStore();