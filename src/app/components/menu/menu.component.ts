import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { AppVisibilityService } from '../../services/app-visibility.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


    constructor(private noteService: NoteService,
                private visibilityService: AppVisibilityService) {
    }

    ngOnInit() {
    }

    addNote() {
        this.noteService.addNewNote();
    }

    noteListVisible() {
        this.visibilityService.changeNoteListVisibility();
    }

}
