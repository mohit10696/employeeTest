import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-project-manager',
  templateUrl: './project-manager.component.html',
  styleUrls: ['./project-manager.component.css']
})
export class ProjectManagerComponent implements OnInit {

  @Input('ProjectManagerData') Data: [{
    fname: string,
    lname: string,
    contact: string,
    salary: string
  }];



  constructor() { }

  ngOnInit(): void {
  }

  getcolor(name:any){

    if (name.salary < 10000){
      return 'Azure';
    }else if (name.salary < 20000){
      return 'BlueViolet';
    }else if (name.salary < 30000){
      return 'DarkCyan';
    }
    return 'DarkSlateGrey';
  }

}
