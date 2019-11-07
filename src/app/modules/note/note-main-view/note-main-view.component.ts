import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { NoteService } from "../../../services/note.service";

@Component({
    selector: 'app-note-main-view',
    templateUrl: './note-main-view.component.html',
    styleUrls: ['./note-main-view.component.scss']
})
export class NoteMainViewComponent implements OnInit {

    opened = true;
    private viewMode: string;

    constructor(private route: ActivatedRoute,
                private noteService: NoteService) {
    }

    ngOnInit() {
        this.route.paramMap.subscribe(queryParams => this.extractParamsFromUrl(queryParams));
    }

    private extractParamsFromUrl(queryParams: ParamMap) {
        this.noteService.loadNote(queryParams.get("noteId"));
    }
}
