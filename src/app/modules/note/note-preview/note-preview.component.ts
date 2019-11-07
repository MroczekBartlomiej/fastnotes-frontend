import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { NoteService } from "../../../services/note.service";
import { Note } from "../../../models/Note";

@Component({
  selector: 'app-note-preview',
  templateUrl: './note-preview.component.html',
  styleUrls: ['./note-preview.component.scss']
})
export class NotePreviewComponent implements OnInit {

  public note: Note = null;


  constructor(private route: ActivatedRoute,
              private noteService: NoteService) { }

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

}
