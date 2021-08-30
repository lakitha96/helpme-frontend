export class HelpRequestScreenDto{
  private uuid: string;
  private helpType: string;
  private affectedAreaImageUrl: string;
  private description: string;
  private status: string;
  private locLng: string;
  private locLat: string;
  private name: string;


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
