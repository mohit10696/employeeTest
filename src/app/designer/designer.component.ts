import { colorservice } from './../color.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.css']
})
export class DesignerComponent implements OnInit {

  @Input('designerData') Data: [{
    fname: string,
    lname: string,
    contact: string,
    salary: string
  }];

  constructor(public colorservices:colorservice) { }

  ngOnInit(): void {
  }



}
