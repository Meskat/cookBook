import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {RecipeService} from './recipe.service';
import {store} from '../store/store';
import 'rxjs/Rx';
import {Recipe} from '../models/recipe.model';
import {getRecipesAction} from '../store/actions/recipes.actions';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DataStorageService {

  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService) {
  }

  public storeRecipes(recipe: Recipe): Observable<Recipe> {
    const token = store.getState().auth.token;

    return this.httpClient
      .put('https://cookbook-bcb89.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
        params: new HttpParams().set('auth', token)
      });
  }

  public getRecipes() {
    this.httpClient.get<Recipe[]>('https://cookbook-bcb89.firebaseio.com/recipes.json') // typed request --generic method
      .map(
        (recipes) => {
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          store.dispatch(getRecipesAction(recipes));
        });
  }
}
