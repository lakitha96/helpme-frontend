export class AuthTokenResponse{
  refresh_token: string;
  access_token: string;


  constructor(refresh_token: string, access_token: string) {
    this.refresh_token = refresh_token;
    this.access_token = access_token;
  }
}
