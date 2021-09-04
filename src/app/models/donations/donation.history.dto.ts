export class DonationHistoryDto {
  transactionId: string;
  paymentName: string;
  amount: string;
  transactionStatus: string;
  helpRequestStatus: string;
  time: string;
  helpRequestUuid: string;


  constructor(transactionId: string, paymentName: string, amount: string, transactionStatus: string, helpRequestStatus: string, time: string, fundRequestUuid: string) {
    this.transactionId = transactionId;
    this.paymentName = paymentName;
    this.amount = amount;
    this.transactionStatus = transactionStatus;
    this.helpRequestStatus = helpRequestStatus;
    this.time = time;
    this.helpRequestUuid = fundRequestUuid;
  }
}
