import { Component, OnInit } from '@angular/core';
import { EditSkillService } from '../services/editSkil/editSkill.service';
import { SkillIdService } from '../services/skillId/skillId.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.less'],
  providers: [SkillIdService]
})
export class EditPageComponent implements OnInit {
  skill: any;
  location: Location;

  constructor(
    private editSkillService: EditSkillService,
    private skillIdService: SkillIdService,
    location: Location
    ) { 
      this.location = location;
    }

  ngOnInit() {
    this.editSkillService.getSkillById(this.skillIdService.get()).subscribe((skill) => this.skill = skill );

  }

  get() {
    console.log(this.skill);
    console.log(this.skillIdService.get())
  }

}
