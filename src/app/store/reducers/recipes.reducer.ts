import {RecipesState} from '../IAppState';

export const initialState = {
  recipesList: []
};

export function recipesReducer(state = initialState, action): RecipesState {
  switch (action.type) {
    case 'recipes/GET_RECIPES':
      return {
        recipesList: [
          ...state.recipesList,
          ...action.recipes
        ]
      };
    case  'recipes/DELETE_RECIPE' :
      return {
        recipesList: state.recipesList.filter(recipe => recipe !== action.recipe),
      };
    case 'recipes/ADD_RECIPE':

      return {
        recipesList: [
          ...state.recipesList,
          action.recipe
        ]
      };
    case 'recipes/EDIT_RECIPE':
      const newRecipeList = state.recipesList.slice();
      newRecipeList.splice(action.index, 1, action.recipe);
      return {
        recipesList: newRecipeList,
      };
    default:
      return state;
  }
}
