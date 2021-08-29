export class HelpRequestDto{
  private help_type_uuid: string;
  private name: string;
  private description: string;
  private contact_number: string;
  private loc_lat: string;
  private loc_lng: string;


  constructor(help_type_uuid: string, name: string, description: string, mobile_number: string, loc_lat: string, loc_lng: string) {
    this.help_type_uuid = help_type_uuid;
    this.name = name;
    this.description = description;
    this.contact_number = mobile_number;
    this.loc_lat = loc_lat;
    this.loc_lng = loc_lng;
  }
}
