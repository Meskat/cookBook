import {Ingredient} from '../../models/ingredients.model';
import {Recipe} from '../../models/recipe.model';

export function addFromRecipeToShoppingList(recipeIngredients: Ingredient[]) {
  return {
    type: 'shoppingList/ADD_FROM_RECIPE',
    recipeIngredients
  };
}

export function deleteRecipeAction(recipe: Recipe) {
  return {
    type: 'recipes/DELETE_RECIPE',
    recipe,
  };
}
export function addRecipeAction(recipe: Recipe) {
  return {
    type: 'recipes/ADD_RECIPE',
    recipe,
  };
}
export function editRecipeAction(index: number, recipe: Recipe) {
  return {
    type: 'recipes/EDIT_RECIPE',
    index,
    recipe,
  };
}

export function getRecipesAction(recipes: Recipe[]) {
  return {
    type: 'recipes/GET_RECIPES',
    recipes,
  };
}


