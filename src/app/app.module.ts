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
import { MatButtonModule, MatCardModule, MatIconModule, MatSliderModule, MatToolbarModule } from '@angular/material';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { NoteEditComponent } from "./modules/note/note-edit/note-edit.component";
import { NoteMainViewComponent } from "./modules/note/note-main-view/note-main-view.component";
import { NotesListComponent } from "./modules/note/notes-list/notes-list.component";
import { NotePreviewComponent } from "./modules/note/note-preview/note-preview.component";
import { NoteAddComponent } from "./modules/note/note-add/note-add.component";
import { MarkdownModule, MarkedOptions } from "ngx-markdown";
import { InputTextareaModule } from "primeng/inputtextarea";
import { ButtonModule } from "primeng/button";
import { PanelMenuModule } from "primeng/panelmenu";
import { MenubarModule } from "primeng/menubar";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatInputModule } from "@angular/material/input";
@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        LoginComponent,
        OAuthComponent,
        NoteEditComponent,
        NoteMainViewComponent,
        NotesListComponent,
        NotePreviewComponent,
        NoteAddComponent
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
        MatSlideToggleModule,
        MatCardModule,
        CommonModule,
        MarkdownModule.forRoot({
            markedOptions: {
                provide: MarkedOptions,
                useValue: {
                    tables: true
                }
            }
        }),
        InputTextareaModule,
        FormsModule,
        ButtonModule,
        PanelMenuModule,
        MenubarModule,
        MatButtonModule,
        MatListModule,
        MatSidenavModule,
        MatGridListModule,
        MatInputModule,
        MatSlideToggleModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
