import {Component, OnInit} from '@angular/core';
import {MapsService} from "../maps.service";
import {NgForm} from "@angular/forms";
import {HelpRequestClient} from "./help.request.client";
import {HelpTypeDto} from "../models/help.type.dto";
import {HttpErrorResponse} from "@angular/common/http";
import {HelpRequestDto} from "../models/help.request.dto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-help-request',
  templateUrl: './help-request.component.html',
  styleUrls: ['./help-request.component.css']
})
export class HelpRequestComponent extends MapsService implements OnInit {
  helpTypes: Array<HelpTypeDto> = [];
  disableSelect: any = 0;
  private selectedHelpUuid: any;

  ngOnInit(): void {
    this.initialize();
    this.getHelpTypes();
  }


  constructor(private helpRequestClient: HelpRequestClient, private router: Router) {
    super();
  }

  selectChangeHandler (uuid: any) {
    //update the ui
    this.selectedHelpUuid = uuid;
  }
  public requestHelp(requestHelpForm: NgForm) {
    this.helpRequestClient.saveHelpRequest(new HelpRequestDto(this.selectedHelpUuid,
      requestHelpForm.controls.actionName.value, requestHelpForm.controls.contactNumber.value,
      requestHelpForm.controls.description.value, this.lat, this.lng)).subscribe((response: any) => {
        alert("Help request successfully saved.");
        this.router.navigate(['/feed']);
      },
    (error: HttpErrorResponse) => {
      alert(error.message);
    });
  }

  public getHelpTypes(): void {
    this.helpRequestClient.getHelpTypes().subscribe((response: any) => {
      this.helpTypes = response.data;
    }), (error: HttpErrorResponse) => {
      console.log(error);
    }
  }
}
