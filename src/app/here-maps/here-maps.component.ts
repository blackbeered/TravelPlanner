import {AfterViewInit, Component} from '@angular/core';
import HereMap = H.Map;
import HereCoordinates = H.Coordinates;
import {HereMapsService} from "./here-maps.service";
import Marker = H.map.Marker;

@Component({
  selector: 'app-here-maps',
  templateUrl: './here-maps.component.html',
  styleUrls: ['./here-maps.component.css']
})
export class HereMapsComponent implements AfterViewInit {

  map: HereMap;
  berlin: HereCoordinates = {lat: 52.5159, lng: 13.3777}

  constructor(private hereMapsService: HereMapsService) {

  }

  ngAfterViewInit(): void {
    let group = new H.map.Group();
    this.map = this.hereMapsService.createMapsInstance(document.getElementById("here-maps"));
    this.setMarker(this.berlin);
    this.map.addEventListener('tap', (event) => {
      var coord = this.map.screenToGeo(event.currentPointer.viewportX,
        event.currentPointer.viewportY);
      console.log(coord);
      console.log('Clicked at ' + Math.abs(coord.lat.toFixed(4)) + ((coord.lat > 0) ? 'N' : 'S') + ' ' + Math.abs(coord.lng.toFixed(4)) + ((coord.lng > 0) ? 'E' : 'W'));
      // this.setMarker(coord,true);
      const datestring =  new Date().toLocaleTimeString("de-DE")
      addMarkerToGroup(group, coord, '<div>'+datestring+'</div>');
    });

    this.map.addObject(group);
    group.addEventListener('tap', (evt) => {
      let bubble = new H.ui.InfoBubble(evt.target.getPosition(), {content: evt.target.getData()});
      this.hereMapsService.ui.addBubble(bubble);
    }, false);

    // addMarkerToGroup(group, {lat: 53.439, lng: -2.221},
    //   '<div><a href=\'http://www.mcfc.co.uk\' >Manchester City</a>' +
    //   '</div><div >City of Manchester Stadium<br>Capacity: 48,000</div>');
    //
    // addMarkerToGroup(group, {lat: 53.430, lng: -2.961},
    //   '<div ><a href=\'http://www.liverpoolfc.tv\' >Liverpool</a>' +
    //   '</div><div >Anfield<br>Capacity: 45,362</div>');

    function addMarkerToGroup(group, coordinate, html: string) {
      var marker = new H.map.Marker(coordinate);
      // add custom data to the marker
      marker.setData(html);
      group.addObject(marker);
    }

  }

  moveMap(location: HereCoordinates, zoom: number): void {
    this.map.setCenter(location);
    this.map.setZoom(zoom);
  }

  setMarker(coords: HereCoordinates, doNotMove?: boolean) {
    let marker = this.createMarker(coords);
    this.map.addObject(marker);
    if (!doNotMove) {
      this.map.setCenter(coords);
      this.map.setZoom(13);
    }

  }

  createMarker(coords: HereCoordinates): Marker {
    const svgImage = `<svg width="48px" height="48px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512.053 512.053" style="enable-background:new 0 0 512.053 512.053;" xml:space="preserve">        <path d="M365.027,44.5c-30-29.667-66.333-44.5-109-44.5s-79,14.833-109,44.5s-45,65.5-45,107.5    c0,25.333,12.833,67.667,38.5,127c25.667,59.334,51.333,113.334,77,162s38.5,72.334,38.5,71c4-7.334,9.5-17.334,16.5-30    s19.333-36.5,37-71.5s33.167-67.166,46.5-96.5c13.334-29.332,25.667-59.667,37-91s17-55,17-71    C410.027,110,395.027,74.167,365.027,44.5z M289.027,184c-9.333,9.333-20.5,14-33.5,14c-13,0-24.167-4.667-33.5-14    s-14-20.5-14-33.5s4.667-24,14-33s20.5-13.5,33.5-13.5c13,0,24.167,4.5,33.5,13.5s14,20,14,33S298.36,174.667,289.027,184z" fill="#D80027"/>    </svg>`;
    const icon = new H.map.Icon(svgImage);
    return new H.map.Marker(coords, {icon: icon})
  }

}
