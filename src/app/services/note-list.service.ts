import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Subject } from "rxjs";
import { Note } from "../models/Note";
import { MenuItem } from "primeng/api";
import { NoteService } from "./note.service";

@Injectable({
    providedIn: 'root'
})
export class NoteListService {

    constructor(private http: HttpClient,
                private noteService: NoteService) {
    }

    private getBaseUrl() {
        return '/api/notes';
    }


}
