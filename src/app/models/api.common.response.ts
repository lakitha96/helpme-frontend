export class ApiCommonResponse{
  private statusInfo: string;
  private lastModified: string;
  private message: string;
  private data: any;


  constructor(statusInfo: string, lastModified: string, message: string, data: any) {
    this.statusInfo = statusInfo;
    this.lastModified = lastModified;
    this.message = message;
    this.data = data;
  }
}
