import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {ManageDatasetComponent} from "./manage-dataset/manage-dataset.component";
import {ContactComponent} from "./contact/contact.component";
import {QueryComponent} from "./query/query.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: QueryComponent},
  {path: 'about', component: AboutComponent},
  {path: 'manage-dataset', component: ManageDatasetComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
