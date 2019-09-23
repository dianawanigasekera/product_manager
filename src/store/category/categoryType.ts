import { Category } from "../../model/Category";


export interface CategoryState {
    category: Category[];
}

// actions
export const ADD_CATEGORY = 'ADD_CATEGORY';

export interface AddCategoryAction {
    type: typeof ADD_CATEGORY;
    payload: {
        category: Category;
    }
}

export type CategoryActionTypes = AddCategoryAction;