
import { CategoryState, ADD_CATEGORY, GET_CATEGORY, CategoryActionTypes } from "./categoryType";
import { Category } from "../../model/Category";
import { ProductActionTypes } from "../product/productType";


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
      c.categoryId = +1
      categoryList.reduce((maxId, c) => (c.categoryId > maxId ? c.categoryId : maxId), 0);
      categoryList.push(c);
      return { category: categoryList };

    case GET_CATEGORY:
      const category = state.category
      console.log(category)
      return { category: category }

    default:
      return state;
  }
}

