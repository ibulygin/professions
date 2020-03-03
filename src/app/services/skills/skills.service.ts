import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpService } from '../http/http.service';
import { error } from 'util';
import { subscribeOn, map, filter } from 'rxjs/operators';
import { Skill } from '../../interfaces/skill';

const baseUrl = 'https://professions-f6d7d.firebaseio.com'

@Injectable()
export class SkillsService {

  constructor(private httpService: HttpService) { }

  id: any;

  getSkills(): Observable<Skill> {
      return this.httpService.get(`${baseUrl}/skills.json`).pipe(
        map((skills) => {
            return skills.filter((skill: Skill) => skill !== null)
        })
              
    )
  }

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
