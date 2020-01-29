import { Component, OnInit } from '@angular/core';
import {LessonServiceClient} from '../services/LessonServiceClient';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  constructor(private service: LessonServiceClient, private router: ActivatedRoute) { }

  Lessons;
  cid;
  mid;
  lid;
  edit = false;
  Lesson = {
    title: 'newLesson'
  };

  ngOnInit() {
    this.router.params.subscribe(params => { this.cid = params.cid; this.mid = params.mid; this.lid = params.lid; });
    if (this.mid != null) {this.findLessonsForModule(); }
  }
  findLessonsForModule() {
    this.service.findLessonsForModule(this.mid).then(lessons => this.Lessons = lessons);
  }

  createLesson() {
    this.service.createLesson(this.mid, this.Lesson).then(() => this.findLessonsForModule());
  }
  deleteLesson(lid) {
    this.service.deleteLesson(lid).then(() => this.findLessonsForModule());
  }
  updateLesson(lid) {
    this.edit = !this.edit
    this.service.updateLesson(lid, this.Lesson).then(() => this.findLessonsForModule());
  }
}
