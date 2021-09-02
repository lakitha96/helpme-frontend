export class FundRequestScreenDto {
  public uuid: string;
  public endDate: string;
  public status: string;
  public maxAmount: string;
  public fundRaisedAmount: string;


  constructor(uuid: string, endDate: string, status: string, maxAmount: string, fundRaisedAmount: string) {
    this.uuid = uuid;
    this.endDate = endDate;
    this.status = status;
    this.maxAmount = maxAmount;
    this.fundRaisedAmount = fundRaisedAmount;
  }
}
