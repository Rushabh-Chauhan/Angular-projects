import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  loadedFeture = 'recipe';
  title = 'course-project-app';

  onNavigate(feture: string) {
    this.loadedFeture = feture;
  }
}
