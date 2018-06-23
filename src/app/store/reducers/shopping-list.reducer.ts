import {ShoppingListState} from '../IAppState';
import {addFromRecipe, addItem} from './reducerHelperFunctions';
import {Action} from "@ngrx/store";

export const initialState = {
  shoppingList: []
};

export function shoppingListReducer(state = initialState, action): ShoppingListState {
  switch (action.type) {
    case 'shoppingList/DELETE_ITEM' :
      return {
        ...state,
        shoppingList: state.shoppingList.filter(item => item !== action.payload),
      };
    case 'shoppingList/DELETE_ALL':
      return {
        ...state,
        shoppingList: []
      };
    case 'shoppingList/ADD_ITEM':
      return addItem(state, action);
    case 'shoppingList/ADD_FROM_RECIPE':
      return addFromRecipe(state, action.recipeIngredients);
    default:
      return state;
  }
}
