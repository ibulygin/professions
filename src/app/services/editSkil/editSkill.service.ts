import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http/http.service';


const baseUrl = 'https://professions-f6d7d.firebaseio.com'

@Injectable()
export class EditSkillService {

  constructor(private httpService: HttpService) { }

  getSkillById(id: string): Observable<any>  {
      return this.httpService.get(`${baseUrl}/skills.json?orderBy="id"&equalTo="${id}"&limitToFirst=1`)
  }

  addSkill(skill): Observable<any>  {
      return this.httpService.post(`${baseUrl}/skills.json`, skill);
  }

  removeSkill(id: string): Observable<any>  {
      return this.httpService.delete(`${baseUrl}/skills/${id}.json`)
  }
}