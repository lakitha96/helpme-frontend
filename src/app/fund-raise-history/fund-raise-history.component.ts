import {Component, OnInit} from '@angular/core';
import {DonationHistoryClient} from "../user-donation-history/donation-history.client";
import {ActivatedRoute, Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-fund-raise-history',
  templateUrl: './fund-raise-history.component.html',
  styleUrls: ['./fund-raise-history.component.css']
})
export class FundRaiseHistoryComponent implements OnInit {

  displayedColumns: string[] = ['helpRequestId', 'username', 'amount', 'donatedDate'];
  dataSource: any;
  fundRequestUuid: any;

  constructor(private donationClient: DonationHistoryClient, private route: ActivatedRoute,) {
    this.fundRequestUuid = this.route.snapshot.paramMap.get('uuid');
  }

  ngOnInit(): void {
    this.getDonationHistory();
  }

  getDonationHistory() {
    this.donationClient.getDonationHistoryForFundRequestId(this.fundRequestUuid).subscribe((response: any) => {
      this.dataSource = new MatTableDataSource(response.data);
      console.log(this.dataSource)
    }), (error: HttpErrorResponse) => {
      alert(error.message);
    }
  }
}
