import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-manager',
  templateUrl: './project-manager.component.html',
  styleUrls: ['./project-manager.component.css']
})
export class ProjectManagerComponent implements OnInit {

  @Input() element: {
    fname: string,
    lname: string,
    contact: string,
    salary: string
  };

  constructor() { }

  ngOnInit(): void {
  }

}
