import {Component, OnInit} from '@angular/core';
import {DonationHistoryClient} from "./donation-history.client";
import {HttpErrorResponse} from "@angular/common/http";
import {DonationHistoryDto} from "../models/donations/donation.history.dto";
import {Router} from "@angular/router";
import {PendingHelpRequestDto} from "../models/feed/pending.help.request.dto";
import {MatTableDataSource} from "@angular/material/table";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-user-donation-history',
  templateUrl: './user-donation-history.component.html',
  styleUrls: ['./user-donation-history.component.css']
})
export class UserDonationHistoryComponent implements OnInit {
  displayedColumns: string[] = ['transactionId', 'paymentName', 'transactionStatus', 'donateAmount', 'action'];
  dataSource: any;

  constructor(private donationClient: DonationHistoryClient, private router: Router) {
  }

  ngOnInit(): void {
    this.getDonationHistory();
  }

  getDonationHistory() {
    this.donationClient.getDonationHistory().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource(response.data);
      console.log(this.dataSource)
    }), (error: HttpErrorResponse) => {
      alert(error.message);
    }
  }

  viewHelpRequest(fundRequestUuid: string) {
    this.router.navigate(['/payment', fundRequestUuid]);
  }
}
