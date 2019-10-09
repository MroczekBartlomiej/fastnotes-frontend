import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { OAuthComponent } from './components/oauth/oauth.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'notes',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/note/note.module').then(value => value.NoteModule)
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'oauth2/redirect',
    component: OAuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
