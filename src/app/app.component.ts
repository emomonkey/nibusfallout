import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { GoogleMapsAPIWrapper, AgmMap, LatLngBounds, LatLngBoundsLiteral} from '@agm/core';
import { MyMarker } from './marker';
declare var google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit ,AfterViewInit {
  title = 'Northern Ireland Bus Times';
    lat = 54.607868;
    lng = -6.996437;
    message = '';
    markers: MyMarker[];

    @ViewChild('AgmMap') agmMap: AgmMap;

    clickMark(site) {
      this.message = site;

    }

    ngOnInit() {
     // this.markers = array
     console.log('Set Marker Array Here');
    }

    ngAfterViewInit() {
      console.log(this.agmMap);
      this.agmMap.mapReady.subscribe(map => {
        const bounds: LatLngBounds = new google.maps.LatLngBounds();
        for (const mm of this.markers) {
          bounds.extend(new google.maps.LatLng(mm.lat, mm.lng));
        }
        map.fitBounds(bounds);
      });
    }
 }
