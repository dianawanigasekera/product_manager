
import { ADD_CATEGORY,CategoryActionTypes } from "./categoryActions";
import { Category } from "../../model/Category";


export interface CategoryState {
    category: Category[];
}

const initialCategoryType: Category[] = [
  {
    categoryId: 1,
    name: "Computer"
  },
  {
    categoryId: 2,
    name: "Phone"
  },
  {
    categoryId: 3,
    name: "Tablet"
  },
  {
    categoryId: 4,
    name: "Monitor"
  }
];

const initialCategoryTypeState: CategoryState = { category: initialCategoryType };

export function categoryReducer(state = initialCategoryTypeState, action: CategoryActionTypes): CategoryState {
  switch (action.type) {
    case ADD_CATEGORY:
      const categoryList = state.category.slice();
      const c = action.payload.category;
      const last_element = categoryList[categoryList.length - 1];
      c.categoryId = last_element.categoryId +1
      // categoryList.reduce((maxId, c) => (last_element.categoryId > maxId ? last_element.categoryId : maxId), 0); 
      categoryList.push(c);
      return { category: categoryList.slice() }

    default:
      return state;
  }
}

