import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class SkillIdService {
    id: string = '';
    
    constructor() { }

    set(id: string): void {
        this.id = id;
    }

    get(): string {
        return this.id;
    }
 
}
