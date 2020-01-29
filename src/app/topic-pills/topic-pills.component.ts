import { Component, OnInit } from '@angular/core';
import {TopicServiceClient} from '../services/TopicServiceClient';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-topic-pills',
  templateUrl: './topic-pills.component.html',
  styleUrls: ['./topic-pills.component.css']
})
export class TopicPillsComponent implements OnInit {

  constructor(private service: TopicServiceClient, private router: ActivatedRoute) { }

  Topics;
  cid;
  mid;
  lid;
  tid;
  ngOnInit() {
    this.router.params.subscribe(params => { this.cid = params['cid']; this.mid = params['mid']; this.lid = params['lid']; this.tid = params['tid'];
                                             this.service.findTopicsForLesson(this.lid).then(topics => this.Topics = topics); } );
  }

}
