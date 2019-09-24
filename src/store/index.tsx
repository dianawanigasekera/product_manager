import { categoryReducer } from "./category/categoryReducer";
import { productReducer } from "./product/productReducer";
import { combineReducers, createStore} from "redux";
import { ProductState } from "./product/productType";
import { CategoryState } from "./category/categoryType";


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