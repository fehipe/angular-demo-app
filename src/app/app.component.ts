import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { interval } from 'rxjs';
import { SwupdaterService } from './sw-updater.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {

  title = 'angular-demo-app DEVELOP8';

  constructor(private sw: SwupdaterService, public swUpdate: SwUpdate) { }

  ngOnInit() {
    if (this.swUpdate.isEnabled) {
      // interval(6).subscribe(() => this.sw.checkForUpdates());
    }
  }
}
