import {Component, OnInit} from '@angular/core';
import {DonationHistoryClient} from "../user-donation-history/donation-history.client";
import {Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-fund-request-history',
  templateUrl: './fund-request-history.component.html',
  styleUrls: ['./fund-request-history.component.css']
})
export class FundRequestHistoryComponent implements OnInit {

  displayedColumns: string[] = ['fundRequestId', 'helpRequestUsername', 'contactNumber', 'totalRaisedAmount', 'expireDate', 'helpRequestType', 'status', 'donationDetails'];
  dataSource: any;

  constructor(private donationClient: DonationHistoryClient, private router: Router) {
  }

  ngOnInit(): void {
    this.getDonationHistory();
  }

  getDonationHistory() {
    this.donationClient.getFundRequestHistory().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource(response.data);
      console.log(this.dataSource)
    }), (error: HttpErrorResponse) => {
      alert(error.message);
    }
  }

  viewDonations(fundRequestUuid: string) {
    this.router.navigate(['/fund-raise-history', fundRequestUuid]);
  }
}
