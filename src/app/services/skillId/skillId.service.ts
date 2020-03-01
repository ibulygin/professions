import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Location} from '@angular/common';


@Injectable()
export class SkillIdService {   
    location: Location;

    constructor(location: Location) { 
        this.location = location;
    }

    private getId(path: string): string {
        const id = path.replace('/edit/', '').trim();
        return id;
    }

    get(): string {
        return this.getId(this.location.path());
    }

}
