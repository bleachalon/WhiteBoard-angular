import {Injectable} from '@angular/core';

@Injectable()
export class TopicServiceClient {
  adr = 'https://webdev19-qin-ng-javaserver.herokuapp.com/api/';
  findAllTopics = () =>
    fetch(this.adr + 'topics').then(Response => Response.json())
  findTopicsForLesson = (lessonId) =>
    fetch(this.adr + 'lessons/' + lessonId + '/topics').then(Response => Response.json())
  findTopicById = (topicId) =>
    fetch(this.adr + 'topics' + topicId).then(Response => Response.json())
}
