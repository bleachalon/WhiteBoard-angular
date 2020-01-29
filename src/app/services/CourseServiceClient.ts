import {Injectable} from '@angular/core';
@Injectable()
export class CourseServiceClient {
  adr = 'https://webdev-qin-server-java-6.herokuapp.com/api/';

  findAllCourses = () =>
    fetch(this.adr + 'courses').then(Response => Response.json())

  findCourseById = (courseId) =>
    fetch(this.adr + 'courses/' + courseId).then(Response => Response.json())

  createCourse = (course) =>
    fetch( this.adr + 'courses', {
      method: 'POST',
      body: JSON.stringify(course),
      headers: {
        'content-type': 'application/jason'
      }
    })

  deleteCourse = (cid) =>
      fetch( this.adr +  `courses/${cid}`, {
        method: 'DELETE'
      })
  updateCourse = (cid, course) =>
    fetch( this.adr +  `courses/${cid}`, {
      method: 'PUT',
      body: JSON.stringify(course),
      headers: {
        'content-type': 'application/jason'
      }
    })
}
