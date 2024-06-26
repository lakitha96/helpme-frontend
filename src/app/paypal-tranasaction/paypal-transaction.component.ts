import {Component, ElementRef, OnInit} from '@angular/core';
import {MapsService} from "../maps.service";
import {ActivatedRoute} from "@angular/router";
import {FundRequestClient} from "./fund-request.client";
import {HttpErrorResponse} from "@angular/common/http";
import {PendingHelpRequestDto} from "../models/feed/pending.help.request.dto";
import {ICreateOrderRequest, IPayPalConfig} from "ngx-paypal";
import {DonateRequestDto} from "../models/payment/donate.request.dto";
import {CurrencyPipe} from "@angular/common";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-paypal-tranasaction',
  templateUrl: './paypal-transaction.component.html',
  styleUrls: ['./paypal-transaction.component.css']
})
export class PaypalTransactionComponent extends MapsService implements OnInit {
  public payPalConfig?: IPayPalConfig;
  helpRequestUuid: any;
  declare public helpRequestDto: PendingHelpRequestDto;
  private showSuccess: boolean = false;
  public formattedAmount: any;
  private realAmount: any;
  public address: any;

  constructor(private route: ActivatedRoute,
              private fundRequestClient: FundRequestClient,
              private currencyPipe: CurrencyPipe) {
    super();
    this.helpRequestUuid = this.route.snapshot.paramMap.get('uuid');
    this.getOngoingHelpRequestByUuid();
  }

  donateAmountFormControl = new FormControl('', [
    Validators.required,
  ]);


  transformAmount(eventForm: any) {
    this.realAmount = eventForm.target.value;
    this.formattedAmount = this.currencyPipe.transform(eventForm.target.value, '$');
  }

  getOngoingHelpRequestByUuid() {
    this.fundRequestClient.getOngoingHelpRequestByUuid(this.helpRequestUuid).subscribe((response: any) => {
      this.helpRequestDto = response.data;
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

  saveDonation(donationDto: DonateRequestDto) {
    this.fundRequestClient.saveDonation(donationDto).subscribe((response: any) => {
      return this.helpRequestDto = response.data;
    }), (error: HttpErrorResponse) => {
      alert(error.message);
    }
  }

  ngOnInit(): void {
    this.initialize();
    this.payPalConfig = {
      currency: 'USD',
      clientId: 'AX-QW7kr6fwCBiOmYl9BN1yjV1kLIP8ZFIyZMGkGmis4-o3QczZrO6AnSs8iLwKUXCqw7wtJ1FqHkTRB',
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        application_context: {
          shipping_preference: 'NO_SHIPPING'
        },
        purchase_units: [
          {
            amount: {
              currency_code: 'USD',
              value: this.realAmount,
              breakdown: {
                item_total: {
                  currency_code: 'USD',
                  value: this.realAmount
                }
              }
            },
            items: [
              {
                name: 'Donation',
                quantity: '1',
                category: 'DIGITAL_GOODS',
                unit_amount: {
                  currency_code: 'USD',
                  value: this.realAmount,
                },
              }
            ]
          }
        ]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical',
        shape: "pill",
        color: "blue"
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        // actions.order.get().then(details => {
        //   console.log('onApprove - you can get full order details inside onApprove: ', details);
        // });
      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
        this.showSuccess = true;
        this.saveDonation(new DonateRequestDto(this.helpRequestDto.fundRequestScreen.uuid,
          data.id, data.payer.address?.country_code, data.payer.email_address,
          data.payer.name?.full_name, data.payer.payer_id, parseFloat(data.purchase_units[0].amount.value), data.status))
        alert("Donation successfully completed. Thank you.");
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
        alert("Payment failed please try again.")
      },
      onError: err => {
        console.log('OnError', err);
        alert("Payment failed please try again.")
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      },
    };
  }
}
