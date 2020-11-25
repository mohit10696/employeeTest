import { Component, OnInit, Input } from '@angular/core';
import { colorservice } from '../color.service';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  @Input('developerData') Data: [{
    fname: string,
    lname: string,
    contact: string,
    salary: string
  }];

  constructor(public colorservices:colorservice) { }

  ngOnInit(): void {
  }

}
