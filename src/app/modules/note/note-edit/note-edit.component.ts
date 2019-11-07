import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../../services/note.service';
import { Note } from '../../../models/Note';
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
    selector: 'app-note-edit',
    templateUrl: './note-edit.component.html',
    styleUrls: ['./note-edit.component.scss']
})
export class NoteEditComponent implements OnInit {

    public note: Note = null;
    edit: boolean;

    opened = true;
    private viewMode: string;

    constructor(private route: ActivatedRoute,
                private noteService: NoteService) {

    }

    ngOnInit() {
        this.noteService.noteObserver.subscribe((value: Note) => {
            this.note = value;
            console.log("Note edit - subscribe");
        });
        this.route.paramMap.subscribe(queryParams => this.extractParamsFromUrl(queryParams));
    }

    private extractParamsFromUrl(queryParams: ParamMap) {
        this.noteService.loadNote(queryParams.get("noteId"));
    }

    save() {
        this.note.id ? this.noteService.saveNote(this.note) : this.noteService.addNote(this.note);
    }
    /*    constructor(
            private noteService: NoteService
        ) {
        }

        ngOnInit() {
            this.noteService.getHeaders();
            console.log("Note edit on init");
            this.noteService.noteObserver.subscribe((value: Note) => {
                this.note = value;
                console.log("Note edit - subscribe");
            });
        }


        changeMode() {
            this.edit = !this.edit;
        }*/

}
