import {Component, OnInit} from '@angular/core';
import {MapsService} from "../maps.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-help-request',
  templateUrl: './help-request.component.html',
  styleUrls: ['./help-request.component.css']
})
export class HelpRequestComponent extends MapsService implements OnInit {
  disableSelect: any = 0;
  ngOnInit(): void {
    this.initialize();
  }

  requestHelp(requestHelpForm: NgForm) {

  }
}
