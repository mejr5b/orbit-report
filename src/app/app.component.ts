import { Component } from '@angular/core';
import { Satellite } from './satellite';

let sourceList: Satellite[];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'orbit-report';
  sourceList: Satellite[];
  constructor() {
    this.sourceList = [];
    let satellitesUrl = 'https://api.myjson.com/bins/ccxv5';
 
    window.fetch(satellitesUrl).then(function(response) {
       response.json().then(function(data) {
 
          let fetchedSatellites = data.satellites;
          for(let i=0; i < fetchedSatellites.length; i++){
            let sat = new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational)
            
            this.sourceList.push(sat);
          }

       }.bind(this));
    }.bind(this));
 
 }
}
