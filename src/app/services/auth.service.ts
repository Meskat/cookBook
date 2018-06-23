import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import {Router} from '@angular/router';
import {store} from '../store/store';
import {changeUserAuthAction, getTokenAction} from '../store/actions/auth.actions';

@Injectable()
export class AuthService {
  public token: string;

  constructor(private router: Router) {}

  public signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        user => {
          store.dispatch(changeUserAuthAction('SIGNUP'));
        }
      )
      .catch(
        err => console.error(err)
      );
  }

  public signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        res => {
          store.dispatch(changeUserAuthAction('LOGIN'));
          this.router.navigate(['/recipes']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token);
        })
      .catch(
        err => console.error(err)
      );
  }

  public getToken(): string {
    firebase.auth().currentUser.getIdToken()
      .then((token: string) => {
      store.dispatch(getTokenAction(token));
    });
    return this.token;
  }

  public logOut() {
    firebase.auth().signOut();
    store.dispatch(changeUserAuthAction('LOGOUT'));
    this.router.navigate(['sign-in']);
    store.dispatch(getTokenAction(null));
  }
}
