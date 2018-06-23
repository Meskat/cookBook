import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {SharedModule} from './modules/shared/shared.module';
import {ShoppingListModule} from './modules/shopping-list/shopping-list.module';
import {AuthModule} from './modules/auth/auth.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from './modules/core/core.module';
import {StoreModule} from '@ngrx/store';
import {shoppingListReducer} from './store/reducers/shopping-list.reducer';
import {recipesReducer} from './store/reducers/recipes.reducer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    ShoppingListModule,
    AuthModule,
    SharedModule,
    CoreModule,
    StoreModule.forRoot({shoppingList: shoppingListReducer, recipesList: recipesReducer})
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
