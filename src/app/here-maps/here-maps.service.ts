import {Injectable} from '@angular/core';
import HereMap = H.Map;
import HerePlatform = H.service.Platform;
import UI = H.ui.UI;

@Injectable()
export class HereMapsService {
  platform: HerePlatform;
  ui: UI;

  constructor() {
    this.platform = new H.service.Platform({
      app_id: '',
      app_code: '',
      useCIT: false, // customer integration testing
      useHTTPS: true
    });
  }

  createMapsInstance(element: HTMLElement): HereMap {
    let defaultLayers = this.platform.createDefaultLayers();
    let result = new H.Map(element, defaultLayers.normal.map);
    let behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(result));
    this.ui = H.ui.UI.createDefault(result, defaultLayers);
    return result
  }

}
