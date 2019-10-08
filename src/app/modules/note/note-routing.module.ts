import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { NoteMainViewComponent } from './note-main-view/note-main-view.component';

const routes: Routes = [
  {
    path: '',
    component: NoteMainViewComponent
  },
  {
    path: 'edit',
    component: NoteEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoteRoutingModule { }
