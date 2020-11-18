import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.css']
})
export class DesignerComponent implements OnInit {

  @Input('DesignerData') Data: [{
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
