import { Component, OnInit } from '@angular/core';
import {MapsService} from "../maps.service";
import {MatTableDataSource} from "@angular/material/table";
import {HttpErrorResponse} from "@angular/common/http";
import {MapServiceClient} from "./map-service-client";

@Component({
  selector: 'app-affected-map',
  templateUrl: './affected-map.component.html',
  styleUrls: ['./affected-map.component.css']
})
export class AffectedMapComponent extends MapsService implements OnInit {
  public locations: any;

  constructor(private mapServiceClient: MapServiceClient) {
    super();
  }

  ngOnInit(): void {
    this.getDonationHistory();
  }

  getDonationHistory() {
    this.mapServiceClient.getAllOngoingHelpRequestsMapLocations().subscribe((response: any) => {
      this.locations = response.data;
      console.log(this.locations)
    }), (error: HttpErrorResponse) => {
      alert(error.message);
    }
  }

}
