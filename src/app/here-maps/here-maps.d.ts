declare namespace H {

  interface Coordinates {
    lat: number;
    lng: number;
  }

  namespace service {
    class Platform {
      constructor(platformParameter: PlatformParameter);

      createDefaultLayers(): Layers;
    }

    class Layers {
      normal: any;
    }

    interface PlatformParameter {
      app_id: string;
      app_code: string;
      useCIT: boolean;
      useHTTPS: boolean;
    }
  }

  namespace map {

    class Marker {
      constructor(coords: Coordinates, options?: MarkerOptions);

      draggable: boolean;

      setData(content: string): void
    }

    class Group {
      constructor();

      addEventListener(event: any, callback: (event) => void, flag:boolean)
    }

    interface MarkerOptions {
      icon: Icon;
    }

    class Icon {
      constructor(imageString: string);
    }
  }

  namespace mapevents {
    class Behavior {
      constructor(mapEvents: MapEvents);
    }

    class MapEvents {
      constructor(map: Map);
    }
  }

  namespace ui {
    import Layers = H.service.Layers;

    class UI {
      static createDefault(map: Map, layers: Layers): UI;

      addBubble(InfoBubble): void
    }

    class InfoBubble {
      constructor(position: any, options?: InfoBubbleOptions)
    }

    interface InfoBubbleOptions {
      content: string
    }
  }

  class Map {
    constructor(element: HTMLElement, mapType: any)

    addObject(object: any): void;

    setCenter(coord: Coordinates): void;

    setZoom(zoom: number): void;

    screenToGeo(lat: number, lng: number): any;

    addEventListener(event: string, callback: (event: any) => void);
  }
}
