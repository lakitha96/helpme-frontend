import {Component, OnInit} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {HttpErrorResponse} from "@angular/common/http";
import {HomeFeedClient} from "./home.feed.client";
import {HelpTypeDto} from "../models/help.type.dto";
import {HelpRequestDto} from "../models/help.request.dto";
import {PendingHelpRequestDto} from "../models/feed/pending.help.request.dto";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public pendingHelpRequests: Array<PendingHelpRequestDto> = [];
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      return this.pendingHelpRequests;
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, private feedClient: HomeFeedClient) {}

  public loadAllPendingHelpRequests() {
    console.log("loadAllPendingHelpRequests");
    this.feedClient.getAllPendingHelpRequests().subscribe((response: any) => {
      this.pendingHelpRequests = response.data;
    }), (error: HttpErrorResponse) => {
      alert(error.message);
    }
  }

  ngOnInit(): void {
    this.loadAllPendingHelpRequests();
  }
}
