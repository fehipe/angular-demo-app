import { Component } from '@angular/core';
import { SwupdaterService } from './sw-updater.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {

  title = 'angular-demo-app DEVELOP6';

  constructor(private sw: SwupdaterService) { }

  ngOnInit() {
    this.sw.checkForUpdates();
  }
}
