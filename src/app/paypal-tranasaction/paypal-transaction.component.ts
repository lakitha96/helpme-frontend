import { Component, OnInit } from '@angular/core';
import {render} from "creditcardpayments/creditCardPayments";
import {MapsService} from "../maps.service";

@Component({
  selector: 'app-paypal-tranasaction',
  templateUrl: './paypal-transaction.component.html',
  styleUrls: ['./paypal-transaction.component.css']
})
export class PaypalTransactionComponent extends MapsService implements OnInit {

  constructor() {
    super();
    render({
      id: "#paypal-buttons",
      currency: "USD",
      value: "1.00",
      onApprove: details => {
        alert("Transaction Success.")
      }
    })
  }

  ngOnInit(): void {
    this.initialize();
  }

}
