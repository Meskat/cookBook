import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignupComponent} from '../../components/auth/signup/signup.component';
import {SigninComponent} from '../../components/auth/signin/signin.component';

const authRoutes: Routes = [
  {path: 'sign-up', component: SignupComponent},
  {path: 'sign-in', component: SigninComponent}
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {

}
