import { initialCategoryType } from "./categoryActions";
import { Category } from "../../model/Category";


export const categoryReducer = (state = { categories: initialCategoryType},action: { type: Category; } ) => {
    switch (action.type) {
      default:
        return state;
    }
  };