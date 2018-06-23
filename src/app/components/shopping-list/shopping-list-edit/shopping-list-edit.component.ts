import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../../models/ingredients.model';
import {store} from '../../../store/store';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {addToShoppingListAction} from '../../../store/actions/shopping-list.actions';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit {
  public ingredients: Ingredient[] = [];
  public shoppingListForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.shoppingListForm = new FormGroup({
        'label': new FormControl(null, Validators.required),
        'amount': new FormControl(null, Validators.required),
    });
  }

  public onSubmit(): void {
    store.dispatch(addToShoppingListAction('shoppingList/ADD_ITEM', this.shoppingListForm.value));
    this.shoppingListForm.reset();
  }

  public onFormReset(): void {
    this.shoppingListForm.reset();
  }
}
