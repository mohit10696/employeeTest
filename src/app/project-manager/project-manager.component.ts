import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { colorservice } from '../color.service';

@Component({
  selector: 'app-project-manager',
  templateUrl: './project-manager.component.html',
  styleUrls: ['./project-manager.component.css']
})
export class ProjectManagerComponent implements OnInit {

  @Input('projectManagerData') Data: [{
    fname: string,
    lname: string,
    contact: string,
    salary: string
  }];



  constructor(public colorservices:colorservice) { }

  ngOnInit(): void {
  }
}
