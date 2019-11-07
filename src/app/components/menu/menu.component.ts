import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


    constructor(private noteService: NoteService,
                private authService: AuthenticationService) {
    }

    ngOnInit() {
    }

    addNote() {
        this.noteService.addNewNote();
    }



}
