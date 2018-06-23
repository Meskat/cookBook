import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from '../models/recipe.model';
import {Ingredient} from '../models/ingredients.model';
import {store} from '../store/store';

@Injectable()
export class RecipeService {
  public recipeSelected = new EventEmitter<Recipe>();
  public recipes: Recipe[];

  public getRecipes() {
    const recipes = store.getState().recipesList.recipesList;
    return [...recipes]; // by zwrócić nową tablice kopie tej tablicy
  }

  public getRecipe(index: number) {
    return this.getRecipes()[index];
  }
}
