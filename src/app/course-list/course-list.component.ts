import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/CourseServiceClient';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  constructor(private service: CourseServiceClient) { }
    Courses;
    Course = {
      title: 'NewCourse',
      author: 'unknown'
    };
    edit = true;
  ngOnInit() {
    this.findAllCourses();
  }

  findAllCourses() {
    this.service.findAllCourses().then(Courses => this.Courses = Courses);
  }
  createCourse() {
    this.service.createCourse(this.Course).then(() => this.findAllCourses());
  }

  deleteCourse(cid) {
    this.service.deleteCourse(cid).then(() => this.findAllCourses());
  }

  updateCourse(cid) {
    this.edit = !this.edit;
    this.service.updateCourse(cid, this.Course).then(() => this.findAllCourses());
  }

}
