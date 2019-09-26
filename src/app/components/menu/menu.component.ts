import { Component, OnInit } from '@angular/core';
import { MenuItem } from "primeng/api";
import { NoteService } from "../../services/note.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.items = [
      {label: 'Add', icon: 'pi pi-plus', command: event => this.addNote()},
    ]
  }

  private addNote(){
    this.noteService.addNewNote();
  }

}
