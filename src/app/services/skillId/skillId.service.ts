import { Injectable } from '@angular/core';
import {Location} from '@angular/common';
import { EditSkillService } from '../editSkil/editSkill.service';


@Injectable()
export class SkillIdService {   
    private automationId: string;
    location: Location;
    
    constructor(
        location: Location,
        private editSkillService: EditSkillService
        ) 
    { 
        this.location = location;
        this.extractAutomationId();
    }

    private getId(path: string): string {
        const id = path.replace('/edit/', '').trim();
        return id;
    }

    private extractAutomationId() {
        const id = this.get();
        this.editSkillService.getSkillById(id).subscribe(
            (skill) => {
              this.automationId = Object.keys(skill).join();
            });
    }

    get(): string {
        return this.getId(this.location.path());
    }

    

    getAutomationId(){
        return this.automationId;
    }

}
