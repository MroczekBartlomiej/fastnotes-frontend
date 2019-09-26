import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import {
    AccordionModule,
    BasePanelMenuItem,
    ButtonModule,
    InputTextareaModule,
    MenubarModule,
    TabMenuModule
} from "primeng/primeng";
import { MenuComponent } from './components/menu/menu.component';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { LoginComponent } from './components/login/login.component';
import { OAuthComponent } from './components/oauth/oauth.component';
import {PanelMenuModule} from 'primeng/panelmenu';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        LoginComponent,
        OAuthComponent
    ],
    imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        BrowserModule,
        AppRoutingModule,
        AccordionModule,
        TabMenuModule,
        ButtonModule,
        MenubarModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
