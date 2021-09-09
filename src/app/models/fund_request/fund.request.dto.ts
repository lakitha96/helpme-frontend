export class FundRequestDto{
  help_request_uuid: string;
  end_date: string;
  maximum_amount: number;


  constructor(help_request_uuid: string, end_date: string, maximum_amount: number) {
    this.help_request_uuid = help_request_uuid;
    this.end_date = end_date;
    this.maximum_amount = maximum_amount;
  }
}
