import { ADD_CATEGORY, CategoryActionTypes, SET_CATEGORIES_LIST } from "./categoryActions";
import { Category } from "../../model/Category";

export interface CategoryState {
  categories: Category[];
}

const initialState: CategoryState = {
  categories: [],
};

export function categoryReducer(
    state = initialState,
    action: CategoryActionTypes): CategoryState {
  switch (action.type) {
    case SET_CATEGORIES_LIST:
      const categories = action.payload.categories;
      return {
        ...state,
        categories: categories,
      };
    case ADD_CATEGORY:
      const categoriesList = state.categories;
      const lastCategoryId = categoriesList.length ? categoriesList[categoriesList.length - 1].categoryId : 0;
      const c = action.payload.categories;
      c.categoryId = lastCategoryId + 1;
      return {
        categories: categoriesList.concat([c]),
      };

    default:
      return state;
  }
}

