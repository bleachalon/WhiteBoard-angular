import { Component, OnInit } from '@angular/core';
import {ModuleServiceClient} from '../services/ModuleServiceClient';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  constructor(private service: ModuleServiceClient, private route: ActivatedRoute) { }
  cid;
  mid;
  Modules;
  edit = false;
  Module = {
    title: 'newModule'
  }
  ngOnInit() {
    this.route.params.subscribe(params => { this.cid = params.cid;  this.mid = params.mid; });
    this.findModuleforCourse();
  }
  findModuleforCourse() {
    this.service.findModulesForCourse(this.cid).then(modules => this.Modules = modules);
  }
  createModule() {
    this.service.createModule(this.cid, this.Module).then(() => this.findModuleforCourse());
  }
  deleteModule(mid) {
    this.service.deleteModule(mid).then(() => this.findModuleforCourse());
  }

  updateModule(mid) {
    this.edit = !this.edit;
    const mod = {
      title: this.Module.title,
      id: mid
    }
    this.service.updateModule(mid, mod).then(() => this.findModuleforCourse());
  }
}
