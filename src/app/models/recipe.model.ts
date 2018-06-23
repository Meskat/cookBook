import {Ingredient} from './ingredients.model';

export interface Recipe {
  name: string;
  desc: string;
  imgPath: string;
  ingredients: Ingredient[];
}
