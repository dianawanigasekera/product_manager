import { Category } from "../../model/Category";
import { AddCategoryAction, ADD_CATEGORY, CategoryActionTypes } from "./categoryType";

export function addCategory(category: Category): AddCategoryAction {
  return {
    type: ADD_CATEGORY,
    payload: {
        category: category,
    },
  };
}