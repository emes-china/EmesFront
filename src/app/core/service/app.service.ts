import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  loginUrl = '/passport/login';
  unAuthorizedUrl = '/exception/403';

  constructor() {}
}
