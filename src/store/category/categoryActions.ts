import { Category } from "../../model/Category";

export const ADD_CATEGORY = 'ADD_CATEGORY';
export const SET_CATEGORIES_LIST = 'SET_CATEGORIES_LIST';

export function setCategoriesList(categories: Category[]) {
	return {
		type: SET_CATEGORIES_LIST as typeof SET_CATEGORIES_LIST,
		payload: {
			categories: categories,
		},
	};
}

export function addCategory(category: Category) {
  return {
    type: ADD_CATEGORY as typeof ADD_CATEGORY,
    payload: {
        categories: category,
    },
  };
}

export type CategoryActionTypes =  ReturnType<typeof addCategory> | ReturnType<typeof setCategoriesList>;