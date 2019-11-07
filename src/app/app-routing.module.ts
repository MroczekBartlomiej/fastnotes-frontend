import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { OAuthComponent } from './components/oauth/oauth.component';
import { NoteAddComponent } from "./modules/note/note-add/note-add.component";
import { NoteEditComponent } from "./modules/note/note-edit/note-edit.component";
import { NotePreviewComponent } from "./modules/note/note-preview/note-preview.component";

const routes: Routes = [
    {
        path: 'add',
        component: NoteAddComponent,
        outlet: 'note'
    },
    {
        path: ':noteId/edit',
        component: NoteEditComponent,
        outlet: 'note'
    },
    {
        path: ':noteId/view',
        component: NotePreviewComponent,
        outlet: 'note'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'oauth2/redirect',
        component: OAuthComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
