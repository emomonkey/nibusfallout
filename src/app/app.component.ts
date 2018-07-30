import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { GoogleMapsAPIWrapper, AgmMap, LatLngBounds, LatLngBoundsLiteral} from '@agm/core';
import { MyMarker } from './marker';
declare var google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit , AfterViewInit {
  title = 'Northern Ireland Bus Times';
    lat = 54.607868;
    lng = -6.996437;
    message = '';
    markers: MyMarker[] = [{id: 1, name: 'Craigavon', lat: 54.4429, lng: -6.4176},
                           {id: 2, name: 'Coleraine', lat: 55.13196, lng: -6.7008792},
                           {id: 3, name: 'Enniskillen', lat: 54.3471047, lng: -7.6483686},
                           {id: 4, name: 'Newry', lat: 54.1700584, lng: -6.368547},
                           {id: 5, name: 'Belfast', lat: 54.5949981, lng: -6.0667163},
                           {id: 6, name: 'LDerry', lat: 55.0067437, lng: -7.3816854}
                          ];

    @ViewChild('AgmMap') agmMap: AgmMap;

    clickMark(site) {
      this.message = site;

    }

    ngOnInit() {
   /*  this.markers = [new MyMarker(1, "Craigavon", 54.4429, 6.4176)];*/
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
