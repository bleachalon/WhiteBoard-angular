import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseListComponent} from './course-list/course-list.component';
import {CourseEditorComponent} from './course-editor/course-editor.component';



const routes: Routes = [
  {path: 'courses', component: CourseListComponent},
  {path: 'courses/:cid/modules', component: CourseEditorComponent},
  {path: 'courses/:cid/modules/:mid/lessons', component: CourseEditorComponent},
  {path: 'courses/:cid/modules/:mid/lessons/:lid/topics', component: CourseEditorComponent},
  {path: 'courses/:cid/modules/:mid/lessons/:lid/topics/:tid/widgets', component: CourseEditorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
