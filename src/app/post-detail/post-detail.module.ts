import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes } from '@angular/router';
import { PostDetailComponent } from './post-detail.component';
import { CommonModule } from '@angular/common';

export const routeConfig: Routes = [
    { path: 'post/:id', component: PostDetailComponent }
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