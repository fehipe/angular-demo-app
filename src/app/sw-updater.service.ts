import { Injectable } from "@angular/core";
import { SwUpdate, VersionReadyEvent } from "@angular/service-worker";
import { filter, map } from "rxjs";

@Injectable( { providedIn: 'root'} )
export class SwupdaterService {

  // constructor(public swUpdate: SwUpdate) {    
  // }

  // public checkForUpdates(): void {
  //   this.swUpdate.versionUpdates.pipe(
  //     filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'),
  //     map(evt => ({
  //       type: 'UPDATE_AVAILABLE',
  //       current: evt.currentVersion,
  //       available: evt.latestVersion,
  //        })),
  //      ).subscribe((event) => {
  //     this.swUpdate.activateUpdate().then(() => {
  //       if(confirm("You're using an old version of the control panel. Want to update?")) {
  //         window.location.reload();
  //       }
  //     });
  //   });
  // }
}
