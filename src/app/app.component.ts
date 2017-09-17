import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./styles/app.component.css']
})
export class AppComponent {
  loadedFeature: string = 'recipes';

  onNavigate(feature: string): void {
    this.loadedFeature = feature;
  }
}
