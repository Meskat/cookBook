import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../../models/ingredients.model';
import {store} from '../../store/store';
import {manageShoppingList} from '../../store/actions/shopping-list.actions';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  public ingredients: Ingredient[] = [];

  constructor() {
    store.subscribe(() => {
        this.updateFromState();
      }
    );
  }

  ngOnInit() {
    this.updateFromState();
  }

  public updateFromState() {
    const state = store.getState();
    this.ingredients = state.shoppingList.shoppingList;
  }

  public onListItemRemove(index: Ingredient) {
    store.dispatch(manageShoppingList('shoppingList/DELETE_ITEM', index));
  }

  public onAllItemsRemove(index: Ingredient): void {
    store.dispatch(manageShoppingList('shoppingList/DELETE_ALL', index));
  }
}
