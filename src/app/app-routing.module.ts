import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiDeleteComponent } from './api-delete/api-delete.component';
import { APIComponent } from './api-post/api.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'api', component: APIComponent},
  { path: 'api-delete', component: ApiDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
