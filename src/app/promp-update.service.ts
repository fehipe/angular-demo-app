import { Injectable } from "@angular/core";
import { SwUpdate, VersionReadyEvent } from "@angular/service-worker";
import { filter } from "rxjs";

@Injectable()
export class PromptUpdateService {

  constructor(swUpdate: SwUpdate) {
    swUpdate.versionUpdates
        .pipe(filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'))
        .subscribe(evt => {
        //   if (promptUser(evt)) {
        //     // Reload the page to update to the latest version.
        //     document.location.reload();
        //   }
                 if(confirm("You're using an old version of the control panel. Want to update?")) {
                    document.location.reload();
        }
        });
  }

}