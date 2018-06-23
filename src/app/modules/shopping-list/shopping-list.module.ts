import {NgModule} from '@angular/core';

import {ShoppingListComponent} from '../../components/shopping-list/shopping-list.component';
import {ShoppingListEditComponent} from '../../components/shopping-list/shopping-list-edit/shopping-list-edit.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingListEditComponent
  ],
  imports: [
    SharedModule,
  ]
})

export class ShoppingListModule {}
