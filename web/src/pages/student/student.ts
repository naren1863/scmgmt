import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { BasePage } from '../base-page/base-page';
@Component({
  selector: 'app-student',
  templateUrl: './student.html',
  styleUrls: ['./student.css']
})
export class studDetailComponent extends BasePage {

  studId: string;
  constructor(private route: ActivatedRoute) { 
    super();
    route.queryParamMap.subscribe((params: ParamMap) => {
      const studIdParam = params.get('studId');
      this.studId = studIdParam;
    });
  }

  ngOnInit() {
  }

}
