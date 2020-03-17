import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { CommonModule } from '@angular/common';
import { PostDetailModule } from './post-detail/post-detail.module';


export const appRoutes: Routes = [
  { path: '', redirectTo: '/display', pathMatch: 'full'},
  { path: '**', component: DisplayComponent}
];

@NgModule({
  declarations: [
    DisplayComponent
  ],
  imports: [
    CommonModule,
    PostDetailModule,
    RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
