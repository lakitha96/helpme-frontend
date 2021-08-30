export class UserScreenDto{
  public userUuid: string;
  public userImage: string;
  public userName: string;


  constructor(userUuid: string, userImage: string, userName: string) {
    this.userUuid = userUuid;
    this.userImage = userImage;
    this.userName = userName;
  }
}
