import { Component, OnInit } from '@angular/core';
import { NoteService } from "../../../services/note.service";
import { Note } from "../../../models/Note";

@Component({
    selector: 'app-note-edit',
    templateUrl: './note-edit.component.html',
    styleUrls: ['./note-edit.component.scss']
})
export class NoteEditComponent implements OnInit {

    public note: Note = null;

    constructor(
        private noteService: NoteService
    ) {
    }

    ngOnInit() {
        this.noteService.getHeaders();
        this.noteService.noteObserver.subscribe((value: Note) => {
            this.note = value;
        });
    }

    save() {
        this.note.id ? this.noteService.saveNote(this.note) : this.noteService.addNote(this.note);
    }

}
