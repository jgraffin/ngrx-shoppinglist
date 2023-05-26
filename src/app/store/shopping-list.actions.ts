import { createAction, props } from "@ngrx/store";
import { IShoppingListItem } from "./shopping-list.state";

export const loadShoppingList = createAction(
  '[Shopping List] Load shopping list'
)

export const loadShoppingListSuccess = createAction(
  '[Shopping List] Load shopping list successfully',
  props<{ entities: IShoppingListItem[] }>()
)

export const loadShoppingListError = createAction(
  '[Shopping List] Load shopping list error'
)
