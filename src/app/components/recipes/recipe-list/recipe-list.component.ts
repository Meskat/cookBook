import {Component, EventEmitter, OnInit} from '@angular/core';
import {Recipe} from '../../../models/recipe.model';
import {RecipeService} from '../../../services/recipe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {store} from '../../../store/store';
import {DataStorageService} from "../../../services/shared-data-storage.service";


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  public recipes: Recipe[];

  constructor(private route: ActivatedRoute, private router: Router,
              private dataStorageService: DataStorageService) {
    store.subscribe(() => {
        this.updateFromState();
      }
    );
  }

  ngOnInit() {
    this.dataStorageService.getRecipes();
    this.updateFromState();
  }

  public updateFromState() {
    const state = store.getState();
    this.recipes = state.recipesList.recipesList;
  }

  public onNewRecipe(): void {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
