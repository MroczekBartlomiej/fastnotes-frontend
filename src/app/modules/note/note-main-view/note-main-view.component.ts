import { Component, OnInit } from '@angular/core';
import { AppVisibilityService } from '../../../services/app-visibility.service';

@Component({
    selector: 'app-note-main-view',
    templateUrl: './note-main-view.component.html',
    styleUrls: ['./note-main-view.component.scss']
})
export class NoteMainViewComponent implements OnInit {

    opened = false;

    constructor(private appVisibilityService: AppVisibilityService) {
        this.appVisibilityService.listVisibility.subscribe(() => {
          this.opened = !this.opened;
        });
    }

    ngOnInit() {
    }

}
