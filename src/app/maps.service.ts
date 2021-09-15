import {Injectable} from '@angular/core';
import {LocationDto} from "./models/location.dto";
import {resolve} from "@angular/compiler-cli/src/ngtsc/file_system";

@Injectable({
  providedIn: 'root'
})
export class MapsService {
  public lat: any;
  public lng: any;

  constructor() {
    this.initialize();
  }

  initialize(): void {
    if (!navigator.geolocation) {
      console.log('location not supported.')
      alert("Please allow access for location services to track your current location.")
    }
    navigator.geolocation.getCurrentPosition(position => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      console.log(`lat: ${this.lat}`, `lon: ${this.lng}`)
    });

    this.watchPosition();

    navigator.permissions.query({name:'geolocation'}).then(function(result) {
      // Will return ['granted', 'prompt', 'denied']
      console.log();
      if (result.state === "denied") {
        alert("Please allow access for location services to track your current location.");
      }
    });
  }


  watchPosition() {

    let id = navigator.geolocation.watchPosition((position) => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      console.log(`lat: ${this.lat}`, `lon: ${this.lng}`)
      //can handle lat lot is within area //check weather affected or not
      navigator.geolocation.clearWatch(id);
      return new LocationDto(position.coords.latitude, position.coords.longitude);
    }, positionError => {
      console.log(positionError.message);
    }, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    })
  }
}
