import {UserScreenDto} from "./user.screen.dto";
import {HelpRequestScreenDto} from "./help.request.screen.dto";
import {OrganizationScreenDto} from "./organization.screen.dto";
import {FundRequestScreenDto} from "./fund.request.screen.dto";

export class PendingHelpRequestDto{
  public userScreen: UserScreenDto;
  public helpRequestScreen: HelpRequestScreenDto;
  public organizationScreen: OrganizationScreenDto;
  public fundRequestScreen: FundRequestScreenDto;


  constructor(userScreen: UserScreenDto, helpRequestScreen: HelpRequestScreenDto, organizationScreen: any, fundRequestScreen: any) {
    this.userScreen = userScreen;
    this.helpRequestScreen = helpRequestScreen;
    this.organizationScreen = organizationScreen;
    this.fundRequestScreen = fundRequestScreen;
  }
}
