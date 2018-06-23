export type AuthActions =
  'LOGIN' |
  'LOGOUT'|
  'SET_TOKEN'|
  'SIGNUP';

export function changeUserAuthAction(type: AuthActions ) {
  return {
    type: type
  };
}
export function getTokenAction(payload: string) {
  return {
    type: 'SET_TOKEN',
    payload
  };
}
