export class OrganizationScreenDto{
  public name: string;
  public imageUrl: string;
  public location: string;


  constructor(name: string, imageUrl: string, location: string) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.location = location;
  }
}
