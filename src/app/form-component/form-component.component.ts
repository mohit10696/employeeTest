import { FormsModule } from '@angular/forms';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';



@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  fname: string;
  lname: string;
  contact: string;
  salary: string;
  @ViewChild('designation') designation: ElementRef;
  designationNumber: number;
  @Output() updataProjectManager = new EventEmitter<{
    fname: string,
    lname: string,
    contact: string,
    salary: string
  }>();
  @Output() updataDeveloper = new EventEmitter<{
    fname: string,
    lname: string,
    contact: string,
    salary: string
  }>();
  @Output() updataDesigner = new EventEmitter<{
    fname: string,
    lname: string,
    contact: string,
    salary: string
  }>();

  constructor() { }

  ngOnInit(): void {
  }

  addData(){
      if(this.fname==undefined||this.lname==undefined||this.salary==undefined||this.contact==undefined){
        alert('Please Enter Value in all fields');
        return;
      }
      this.designationNumber = this.designation.nativeElement.options.selectedIndex;

      if (this.designationNumber === 0){
        this.addProjectManagar();
      }else if (this.designationNumber === 1){
        this.addDeveloper();
      }else if (this.designationNumber === 2){
        this.addDesigner();
      }else{
        console.log('Something went wrong');
      }

  }
  addProjectManagar(){
    this.updataProjectManager.emit({
    fname: this.fname,
    lname: this.lname,
    contact: this.contact,
    salary: this.salary
    });
  }
  addDeveloper(){
    this.updataDeveloper.emit({
      fname: this.fname,
      lname: this.lname,
      contact: this.contact,
      salary: this.salary
      });
  }
  addDesigner(){
    this.updataDesigner.emit({
      fname: this.fname,
      lname: this.lname,
      contact: this.contact,
      salary: this.salary
      });
  }

}
