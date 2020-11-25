import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to employee app';
  managerList = [];
  developerList = [];
  designerList = [];
  onAddProjectManager(managerData:any){
    this.managerList.push({
      fname : managerData.fname,
      lname : managerData.lname,
      contact : managerData.contact,
      salary : managerData.salary
    });
    console.log(this.managerList);
  }
  onAddDeveloper(developerData:any){
    this.developerList.push({
      fname : developerData.fname,
      lname : developerData.lname,
      contact : developerData.contact,
      salary : developerData.salary
    });
    console.log(this.developerList);
  }
  onAddDesigner(designerData:any){
    this.designerList.push({
      fname : designerData.fname,
      lname : designerData.lname,
      contact : designerData.contact,
      salary : designerData.salary
    });
    console.log(this.designerList);
  }
}
