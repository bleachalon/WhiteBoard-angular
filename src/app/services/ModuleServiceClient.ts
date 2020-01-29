import {Injectable} from '@angular/core';
@Injectable()
export class ModuleServiceClient {
  adr = 'https://webdev-qin-server-java-6.herokuapp.com/api/';

  findAllModules = () =>
    fetch(this.adr + 'modules').then(Response => Response.json())

  findModulesForCourse = (courseId) =>
    fetch(this.adr + 'courses/' + courseId + '/modules').then(Response => Response.json())

  findModuleById = (moduleId) =>
    fetch(this.adr + 'modules/' + moduleId).then(Response => Response.json())

  createModule = (cid, module) =>
    fetch( this.adr + `courses/${cid}/modules`, {
      method: 'POST',
      body: JSON.stringify(module),
      headers: {
        'content-type': 'application/json'
      }
    })

  deleteModule = (mid) =>
    fetch(this.adr + `modules/${mid}`, {
      method: 'DELETE'
    })

  updateModule = (mid, module) =>
    fetch( this.adr +  `modules/${mid}`, {
      method: 'PUT',
      body: JSON.stringify(module),
      headers: {
        'content-type': 'application/json'
      }
    })
}
