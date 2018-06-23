import {NgModule} from '@angular/core';
import {HeaderComponent} from '../../components/header/header.component';
import {HomeComponent} from '../../components/home/home.component';
import {SharedModule} from '../shared/shared.module';
import {AppRoutingModule} from '../../app-routing.module';
import {RecipeService} from '../../services/recipe.service';
import {AuthService} from '../../services/auth.service';
import {AuthGuard} from '../../components/auth/auth-guard.service';
import {DataStorageService} from '../../services/shared-data-storage.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  exports: [
    HeaderComponent,
    HttpClientModule,
    AppRoutingModule // zawsze potrzebujemy tego w appmodule
  ],
  providers: [
    RecipeService,
    AuthService,
    AuthGuard,
    DataStorageService,
  ],

})
export class CoreModule {
}
