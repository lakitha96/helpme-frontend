import { Component, OnInit } from '@angular/core';
import {MapsService} from "../maps.service";
import {PendingHelpRequestDto} from "../models/feed/pending.help.request.dto";
import {FundRequestClient} from "../paypal-tranasaction/fund-request.client";
import {HttpErrorResponse} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {toNumbers} from "@angular/compiler-cli/src/diagnostics/typescript_version";

@Component({
  selector: 'app-fund-request',
  templateUrl: './fund-request.component.html',
  styleUrls: ['./fund-request.component.css']
})
export class FundRequestComponent extends MapsService implements OnInit {
  public helpRequestUuid: any;
  declare public helpRequestDto: PendingHelpRequestDto;
  public address: any;
  // public markerLat: any;
  // public markerLng: any;

  constructor(private fundRequestClient: FundRequestClient, private route: ActivatedRoute) {
    super();
    this.helpRequestUuid = this.route.snapshot.paramMap.get('uuid');
    this.getOngoingHelpRequestByUuid();
  }

  ngOnInit(): void {
    this.getOngoingHelpRequestByUuid();
  }

  getOngoingHelpRequestByUuid() {
    this.fundRequestClient.getOngoingHelpRequestByUuid(this.helpRequestUuid).subscribe((response: any) => {
      this.helpRequestDto = response.data;
      this.lat = parseFloat(this.helpRequestDto.helpRequestScreen.locLat);
      this.lng = parseFloat(this.helpRequestDto.helpRequestScreen.locLng);
      this.getLocationAddress();
    }), (error: HttpErrorResponse) => {
      alert(error.message);
    }
  }
  getLocationAddress() {
    this.fundRequestClient.getAddress(this.helpRequestDto.helpRequestScreen.locLat, this.helpRequestDto.helpRequestScreen.locLng).subscribe((response: any) => {
      this.address =  response.plus_code.compound_code;
      // console.log(response.results.formatted_address)
    }), (error: HttpErrorResponse) => {
      alert(error.message);
    }
  }

}
