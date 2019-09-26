import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public API_BASE_URL: string = 'http://vps730380.ovh.net:8080';
  public ACCESS_TOKEN: string = 'accessToken';

  public OAUTH2_REDIRECT_URI: string = 'http://vps730380.ovh.net:80/oauth2/redirect';

  public GOOGLE_AUTH_URL: string = this.API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + this.OAUTH2_REDIRECT_URI;
  public FACEBOOK_AUTH_URL: string = this.API_BASE_URL + '/oauth2/authorize/facebook?redirect_uri=' + this.OAUTH2_REDIRECT_URI;
  public GITHUB_AUTH_URL: string = this.API_BASE_URL + '/oauth2/authorize/github?redirect_uri=' + this.OAUTH2_REDIRECT_URI;

  constructor() { }

  ngOnInit() {
  }

}
