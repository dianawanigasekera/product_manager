import { Category } from "../../model/Category";


export const ADD_CATEGORY = 'ADD_CATEGORY';

export function addCategory(category: Category) {
  return {
    type: ADD_CATEGORY as typeof ADD_CATEGORY,
    payload: {
        category: category,
    },
  };
}

export type CategoryActionTypes =  ReturnType<typeof addCategory>;