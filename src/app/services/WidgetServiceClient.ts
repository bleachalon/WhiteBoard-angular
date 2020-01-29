import {Injectable} from '@angular/core';

@Injectable()
export class WidgetServiceClient {
  adr = 'https://webdev19-qin-ng-javaserver.herokuapp.com/api/';
  findAllWidgets = () =>
    fetch(this.adr + 'widgets').then(Response => Response.json())
  findWidgetsForTopic = (topicId) =>
    fetch(this.adr + 'topics/' + topicId + '/widgets').then(Response => Response.json())
  findWidgetById = (widgetId) =>
    fetch(this.adr + 'widgets' + widgetId).then(Response => Response.json())

  createWidget = (lid, widget) =>
    fetch(this.adr + `lesson/${lid}/widget`, {
      method: 'POST',
      body: JSON.stringify(widget),
      headers: {
        'content-type': 'application/json'
      }
    })

  deleteWidget = (wid) =>
    fetch( this.adr + `widgets/${wid}`, {
      method: 'DELETE'
    })

  updateWidget = (wid, widget) =>
    fetch(this.adr + `widgets/${wid}`, {
      method: 'PUT',
      body: JSON.stringify(widget),
      headers: {
        'content-type': 'application/json'
      }
    })

}
