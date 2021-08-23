import {UserRegisterDto} from "./user.register.dto";

export class OrganizationRegisterDto{
  private organization_name: string;
  private location: string;
  private image_url: string;
  private user: UserRegisterDto;


  constructor(organization_name: string, location: string, image_url: string, user: UserRegisterDto) {
    this.organization_name = organization_name;
    this.location = location;
    this.image_url = image_url;
    this.user = user;
  }
}
