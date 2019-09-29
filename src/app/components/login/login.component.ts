import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public API_BASE_URL: string = environment.apiBaseUrl
  public ACCESS_TOKEN: string = 'accessToken';

  public OAUTH2_REDIRECT_URI: string = environment.oauth2RedirectUri;

  public GOOGLE_AUTH_URL: string = this.API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + this.OAUTH2_REDIRECT_URI;
  public FACEBOOK_AUTH_URL: string = this.API_BASE_URL + '/oauth2/authorize/facebook?redirect_uri=' + this.OAUTH2_REDIRECT_URI;
  public GITHUB_AUTH_URL: string = this.API_BASE_URL + '/oauth2/authorize/github?redirect_uri=' + this.OAUTH2_REDIRECT_URI;

  constructor() { }

  ngOnInit() {
  }

}
