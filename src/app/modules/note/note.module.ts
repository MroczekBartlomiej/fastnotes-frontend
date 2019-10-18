import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoteRoutingModule } from './note-routing.module';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { ButtonModule, InputTextareaModule, MenubarModule, PanelMenuModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import { NoteMainViewComponent } from './note-main-view/note-main-view.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import {
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatSlideToggleModule
} from '@angular/material';

@NgModule({
    declarations: [
        NoteEditComponent,
        NoteMainViewComponent,
        NotesListComponent],
    imports: [
        CommonModule,
        NoteRoutingModule,
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
    ]
})
export class NoteModule {
}
