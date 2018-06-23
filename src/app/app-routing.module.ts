import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {ShoppingListComponent} from './components/shopping-list/shopping-list.component';
import {HomeComponent} from './components/home/home.component';
import {AuthGuard} from './components/auth/auth-guard.service';

export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'recipes',
    loadChildren: './modules/recipes/recipes.module#RecipesModule'
  },
  {path: 'shopping-list', component: ShoppingListComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
