import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Note } from "../models/Note";
import { Subject } from "rxjs";
import { MenuItem } from "primeng/api";

@Injectable({
    providedIn: 'root'
})
export class NoteService {

    private note = new Subject<Note>();
    noteObserver = this.note.asObservable();

    private noteList = new Subject<Note[]>();
    listObserver = this.noteList.asObservable();
    notesHeaders: Note[];

    constructor(private http: HttpClient) {
    }

    private getBaseUrl() {
        return '/api/notes'
    }

    addNote(note: Note) {
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Authorization', 'Bearer ' + sessionStorage.getItem('token'));

        this.http.post(this.getBaseUrl(), note, {headers}).subscribe((value: Note) => this.addNoteHeader(value));
    }

    saveNote(note: Note) {
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Authorization', 'Bearer ' + sessionStorage.getItem('token'));

        this.http.put(this.getBaseUrl(), note, {headers}).subscribe(value => console.log(value));
    }

    loadNote(id: String) {
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Authorization', 'Bearer ' + sessionStorage.getItem('token'));
        this.http.get(this.getBaseUrl() + '/?id=' + id, {headers}).subscribe((value: Note) => this.note.next(value));
    }

    addNewNote() {
        let note: Note = {id: null, body: '## New note!'};
        this.note.next(note)
    }

    getHeaders() {
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Authorization', 'Bearer ' + sessionStorage.getItem('token'));

        //TODO: Poprawić do obsługi kategori. notesItems - musi być na pewno poprawione.
        this.http.get(this.getBaseUrl() + '/all', {headers})
            .subscribe((notes: Note[]) => {
                this.notesHeaders = notes;
                this.noteList.next(this.notesHeaders);
            });


    }

    addNoteHeader(note: Note) {
        this.getHeaders();
    }
}
