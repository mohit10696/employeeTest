import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  @Input('DeveloperData') Data: [{
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
