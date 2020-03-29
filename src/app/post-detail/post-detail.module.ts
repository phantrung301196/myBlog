import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes } from '@angular/router';
import { PostDetailComponent } from './post-detail.component';
import { CommonModule } from '@angular/common';
import { NewPostComponent } from '../new-post/new-post.component'

export const routeConfig: Routes = [
    { path: 'post/:id', component: PostDetailComponent },
    { path: 'post', component: NewPostComponent }
];

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        RouterModule.forChild(routeConfig)
    ],
    declarations: [PostDetailComponent]
})

export class PostDetailModule { }