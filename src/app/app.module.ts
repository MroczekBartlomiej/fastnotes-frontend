import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { OAuthComponent } from './components/oauth/oauth.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatSliderModule, MatToolbarModule } from '@angular/material';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        LoginComponent,
        OAuthComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        BrowserModule,
        AppRoutingModule,
        MatSliderModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSlideToggleModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
