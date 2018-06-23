import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {store} from "../../store/store";
import {Observable} from "rxjs/Observable";
import {AuthState} from "../../store/IAppState";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isAuthenticated: boolean;
  constructor(public authService: AuthService) {
  }

  public ngOnInit() {
    this.isAuthenticated = store.getState().auth.authenticated;
  }

  public logout() {
    this.authService.logOut();
  }
}
