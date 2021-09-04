import {IPartyName} from "ngx-paypal";

export class DonateRequestDto {
  fundRequestUuid: any;
  transactionId: any;
  payerAddress: any;
  payerEmail: any;
  payerName: any;
  payerId: any;
  amount: number;
  status: any;


  constructor(fundRequestUuid: any, transactionId: any, payerAddress: any, payerEmail: any, payerName: any, payerId: any, amount: number, status: any) {
    this.fundRequestUuid = fundRequestUuid;
    this.transactionId = transactionId;
    this.payerAddress = payerAddress;
    this.payerEmail = payerEmail;
    this.payerName = payerName;
    this.payerId = payerId;
    this.amount = amount;
    this.status = status;
  }
}
