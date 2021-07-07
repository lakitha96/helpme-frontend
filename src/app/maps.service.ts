import {Injectable} from '@angular/core';
import {LocationDto} from "./models/location.dto";

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
    }
    navigator.geolocation.getCurrentPosition(position => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      console.log(`lat: ${this.lat}`, `lon: ${this.lng}`)
    })
    this.watchPosition();
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
