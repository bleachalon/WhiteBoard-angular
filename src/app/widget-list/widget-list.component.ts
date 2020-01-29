import { Component, OnInit } from '@angular/core';
import {WidgetServiceClient} from '../services/WidgetServiceClient';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  constructor(private service: WidgetServiceClient, private router: ActivatedRoute) { }
    Widgets;
    cid;
    mid;
    lid;
    Widget = {
      title: 'newWidget',
      text: '',
      size: '1',
      src: ''
    }
  ngOnInit() {
    this.router.params.subscribe(params => { this.cid = params.cid; this.mid = params.mid; this.lid = params.lid; });
    if (this.lid != null) { this.findWidgetsForLesson(); }
  }

  findWidgetsForLesson() {
    this.service.findWidgetsForTopic(this.lid).then(widgets => this.Widgets = widgets);
  }
  createWidget() {
     this.service.createWidget(this.lid, this.Widget).then( () => this.findWidgetsForLesson());
  }
  deleteWidget(wid) {
      this.service.deleteWidget(wid).then( () => this.findWidgetsForLesson());
  }
  updateWidget(wid) {
      this.service.updateWidget(wid, this.Widget).then( () => this.findWidgetsForLesson());
  }
  splitList(s) {
      return s.split(' ');
  }
}
