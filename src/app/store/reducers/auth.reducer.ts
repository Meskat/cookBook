const initialState = {
  token: null,
  authenticated: false,
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
    case 'SIGNUP':
      return {
        ...state,
        authenticated: true
      };
    case 'LOGOUT':
      return {
        ...state,
        authenticated: false
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload
      };
    default: {
      return state;
    }
  }
}
