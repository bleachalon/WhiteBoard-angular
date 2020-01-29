import {Injectable} from '@angular/core';

@Injectable()
export class LessonServiceClient {
  adr = 'https://webdev-qin-server-java-6.herokuapp.com/api/';
  findAllLessons = () =>
    fetch(this.adr + 'lessons').then(Response => Response.json())
  findLessonsForModule = (moduleId) =>
    fetch(this.adr + 'modules/' + moduleId + '/lessons').then(Response => Response.json())
  findLessonById = (lessonId) =>
    fetch(this.adr + 'lessons/' + lessonId).then(Response => Response.json())

  createLesson = (mid, lesson) =>
    fetch(this.adr + `module/${mid}/lessons`, {
      method: 'POST',
      body: JSON.stringify(lesson),
      headers: {
        'content-type': 'application/json'
      }
    })
  deleteLesson = (lid) =>
    fetch(this.adr + `lesson/${lid}`, {
      method: 'DELETE'
    })

  updateLesson = (lid, lesson) =>
    fetch(this.adr + `lesson/${lid}`, {
      method: 'PUT',
      body: JSON.stringify(lesson),
      headers: {
        'content-type': 'application/json'
      }
    })
}

