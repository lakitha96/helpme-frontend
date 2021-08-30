import {UserScreenDto} from "./user.screen.dto";
import {HelpRequestScreenDto} from "./help.request.screen.dto";

export class PendingHelpRequestDto{
  public userScreen: UserScreenDto;
  public helpRequestScreen: HelpRequestScreenDto;
  public organizationScreen: any;
  public fundRequestScreen: any;


  constructor(userScreen: UserScreenDto, helpRequestScreen: HelpRequestScreenDto, organizationScreen: any, fundRequestScreen: any) {
    this.userScreen = userScreen;
    this.helpRequestScreen = helpRequestScreen;
    this.organizationScreen = organizationScreen;
    this.fundRequestScreen = fundRequestScreen;
  }
}
