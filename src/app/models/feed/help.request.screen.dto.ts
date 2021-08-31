export class HelpRequestScreenDto{
  public uuid: string;
  public helpType: string;
  public affectedAreaImageUrl: string;
  public description: string;
  public status: string;
  public locLng: string;
  public locLat: string;
  public name: string;


  constructor(uuid: string, helpType: string, affectedAreaImageUrl: string, description: string, status: string, locLng: string, locLat: string, name: string) {
    this.uuid = uuid;
    this.helpType = helpType;
    this.affectedAreaImageUrl = affectedAreaImageUrl;
    this.description = description;
    this.status = status;
    this.locLng = locLng;
    this.locLat = locLat;
    this.name = name;
  }
}
