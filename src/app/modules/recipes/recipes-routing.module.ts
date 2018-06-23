import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from '../../components/recipes/recipes.component';
import {RecipesStartComponent} from '../../components/recipes/recipes-start/recipes-start.component';
import {RecipeEditComponent} from '../../components/recipes/recipe-edit/recipe-edit.component';
import {AuthGuard} from '../../components/auth/auth-guard.service';
import {RecipeDetailComponent} from '../../components/recipes/recipe-detail/recipe-detail.component';

const routes: Routes = [
  {path: '', component: RecipesComponent, children: [
    {path: '', component: RecipesStartComponent},
    {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
    {path: ':id', component: RecipeDetailComponent},
    {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule {}
