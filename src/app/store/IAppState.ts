import {Ingredient} from '../models/ingredients.model';
import {Recipe} from '../models/recipe.model';

export interface ShoppingListState {
  shoppingList: Ingredient[];
}

export interface RecipesState {
  recipesList: Recipe[];
}

export interface AuthState {
  token: string;
  authenticated: boolean;
}
export interface IAppState {
  shoppingList: ShoppingListState;
  recipesList: RecipesState;
  auth: AuthState;
}


