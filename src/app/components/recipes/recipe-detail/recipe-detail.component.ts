import {Component, OnInit} from '@angular/core';
import {Recipe} from '../../../models/recipe.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {RecipeService} from '../../../services/recipe.service';
import {store} from '../../../store/store';
import {addFromRecipeToShoppingList, deleteRecipeAction} from '../../../store/actions/recipes.actions';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  public recipe: Recipe;
  public id: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      });
  }

  public addToShoppingList(): void {
    store.dispatch(addFromRecipeToShoppingList([...this.recipe.ingredients]));
  }

  public onDeleteRecipe(): void {
    store.dispatch(deleteRecipeAction(this.recipe));
    this.router.navigate(['recipes']);
  }
  public onEditRecipe(): void {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
}
