import {NgModule} from '@angular/core';
import {SigninComponent} from '../../components/auth/signin/signin.component';
import {SignupComponent} from '../../components/auth/signup/signup.component';
import {SharedModule} from '../shared/shared.module';
import {AuthRoutingModule} from './auth-routing.module';

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent
  ],
  imports: [
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule {
}
