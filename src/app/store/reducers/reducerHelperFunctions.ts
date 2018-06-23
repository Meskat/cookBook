import {ShoppingListState} from '../IAppState';

export function addItem(state, action): ShoppingListState {
  let IngredientsItem = state.shoppingList.find(item => item.label === action.listItem.label);
  if (IngredientsItem) {
    IngredientsItem.amount = Number(action.listItem.amount) + Number(IngredientsItem.amount);

    return {
      ...state,
      shoppingList: state.shoppingList.filter(item => item !== action.listItem.label),
    };
  }
  IngredientsItem = {amount: action.listItem.amount, label: action.listItem.label};

  return {
    ...state,
    shoppingList: [
      ...state.shoppingList,
      IngredientsItem
    ]
  };
}

export function addFromRecipe(state, action): ShoppingListState {
  const shoppingList = state.shoppingList.slice(0);
  const newItem = action.map(ingredient => {
    const IngredientsItem = shoppingList.find(item => item.label === ingredient.label);
    const index = shoppingList.findIndex((ing) => ing.label === ingredient.label);

    if (index !== -1) {
      shoppingList.splice(index, 1);
    }

    if (typeof IngredientsItem !== 'undefined') {
      IngredientsItem.amount = Number(ingredient.amount) + Number(IngredientsItem.amount);

      return IngredientsItem;
    } else {
      return {...ingredient};
    }
  });

  const newState = shoppingList.concat(...newItem);

  return {
    ...state,
    shoppingList: [...newState],
  };
}
