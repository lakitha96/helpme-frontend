import {Component, OnInit} from '@angular/core';
import {render} from "creditcardpayments/creditCardPayments";
import {MapsService} from "../maps.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-paypal-tranasaction',
  templateUrl: './paypal-transaction.component.html',
  styleUrls: ['./paypal-transaction.component.css']
})
export class PaypalTransactionComponent extends MapsService implements OnInit {
  fundRequestUuid: any;

  constructor(private route: ActivatedRoute) {
    super();
    this.fundRequestUuid = this.route.snapshot.paramMap.get('uuid');
  }

  ngOnInit(): void {
    this.initialize();
    render({
      id: "#paypal-buttons",
      currency: "USD",
      value: "1.00",
      onApprove: details => {
        alert("Transaction Success.")
      }
    })
  }
}
