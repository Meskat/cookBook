import {Ingredient} from '../../models/ingredients.model';

export type ShoppingListActions =
  'shoppingList/DELETE_ITEM'
  | 'shoppingList/DELETE_ALL'
  | 'shoppingList/ADD_ITEM'
  | 'shoppingList/ADD_FROM_RECIPE';

export function manageShoppingList(type: ShoppingListActions, payload) {
  return {
    type: type,
    payload,
  };
}
export function addToShoppingListAction(type: ShoppingListActions, listItem: Ingredient) {
  return {
    type: type,
    listItem
  };
}
