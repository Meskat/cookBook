import {createStore, applyMiddleware, compose} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {shoppingListReducer} from './reducers/shopping-list.reducer';
import {recipesReducer} from './reducers/recipes.reducer';
import {IAppState} from './IAppState';
import {combineReducers} from '@ngrx/store';
import {authReducer} from './reducers/auth.reducer';

const rootReducer = combineReducers({
  shoppingList: shoppingListReducer,
  recipesList: recipesReducer,
  auth: authReducer,
});

export const store = createStore<IAppState>(
  rootReducer,
  composeWithDevTools(applyMiddleware())
  )
;
