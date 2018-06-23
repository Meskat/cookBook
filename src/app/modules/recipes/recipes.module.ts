import {NgModule} from '@angular/core';
import {RecipesComponent} from '../../components/recipes/recipes.component';
import {RecipesStartComponent} from '../../components/recipes/recipes-start/recipes-start.component';
import {RecipeListComponent} from '../../components/recipes/recipe-list/recipe-list.component';
import {RecipeEditComponent} from '../../components/recipes/recipe-edit/recipe-edit.component';
import {RecipeDetailComponent} from '../../components/recipes/recipe-detail/recipe-detail.component';
import {RecipeItemComponent} from '../../components/recipes/recipe-list/recipe-item/recipe-item.component';
import {RecipesRoutingModule} from './recipes-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipesStartComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeEditComponent,
    RecipeDetailComponent
  ],
  imports: [
    RecipesRoutingModule,
    SharedModule
  ]
})
export class RecipesModule {
}
