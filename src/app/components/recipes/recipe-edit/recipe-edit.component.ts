import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {store} from '../../../store/store';
import {addRecipeAction, editRecipeAction} from '../../../store/actions/recipes.actions';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {RecipeService} from '../../../services/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  public id: number;
  public editMode = false;
  public recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,  private router: Router, private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = Number(params['id']);
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );

  }

  private initForm() {
    let name = '';
    let img = '';
    let desc = '';
    const  ingredients = new FormArray([]);

    if (this.editMode === true) {
      const recipe = this.recipeService.getRecipe(this.id);
      name = recipe.name;
      img = recipe.imgPath;
      desc = recipe.desc;

      if (recipe['ingredients']) {
        for (const ing of recipe.ingredients) {
          ingredients.push(
            new FormGroup({
              'label': new FormControl(ing.label, Validators.required),
              'amount': new FormControl(ing.amount, Validators.required)
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'desc': new FormControl(desc, Validators.required),
      'imgPath': new FormControl(img),
      'ingredients': ingredients
    });
  }

  public onSubmit() {

    if (this.editMode === true) {
      store.dispatch(editRecipeAction(this.id, this.recipeForm.value));
    } else {
      store.dispatch(addRecipeAction(this.recipeForm.value));
      this.recipeForm.reset();
    }
    this.router.navigate(['recipes']);
  }

  public onAddNewIngredientInputs(): void {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'label': new FormControl(),
        'amount': new FormControl(),
      })
    );
  }
}
