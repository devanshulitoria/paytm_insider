import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopStoriesComponent } from './top-stories/top-stories.component';
import { PastStoriesComponent } from './past-stories/past-stories.component';
import { CommentsComponent } from './comments/comments.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  {path:'topstories',component:TopStoriesComponent},
  {path:'paststories',component:PastStoriesComponent},
  {path:'comments/:id',component:CommentsComponent},
  {path:'**',component:ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
