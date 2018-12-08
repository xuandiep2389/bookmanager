import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainpageComponent} from './mainpage/mainpage.component';
import {ReadingListComponent} from './reading-list/reading-list.component';
import {ArchiveComponent} from './archive/archive.component';

const routes: Routes = [
  {path: 'readinglist', component: ReadingListComponent},
  {path: 'archive', component: ArchiveComponent},
  {path: 'mainpage', component: MainpageComponent},
  {path: '', redirectTo: '/mainpage', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
