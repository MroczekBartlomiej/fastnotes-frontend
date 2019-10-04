import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppVisibilityService {

    private noteListVisible = new Subject<any>();
    listVisibility = this.noteListVisible.asObservable();

    constructor() {
    }

    changeNoteListVisibility() {
        this.noteListVisible.next(true);
    }

}
