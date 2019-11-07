import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../../services/note.service';
import { Note } from '../../../models/Note';

@Component({
    selector: 'app-notes-list',
    templateUrl: './notes-list.component.html',
    styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

    public notes: Note[] = [];


    constructor(private noteService: NoteService) {
    }

    ngOnInit() {
        this.noteService.getHeaders();
        this.noteService.listObserver.subscribe((value: Note[]) => {
            this.notes = value;
        });
    }

    loadNote(id: string) {
        this.noteService.loadNote(id);
    }
}
