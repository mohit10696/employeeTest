import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to employee app';
  ManagerList = [];
  DeveloperList = [];
  DesignerList = [];
  onAddProjectManager(managerData:any){
    this.ManagerList.push({
      fname : managerData.fname,
      lname : managerData.lname,
      contact : managerData.contact,
      salary : managerData.salary
    });
    console.log(this.ManagerList);
  }
  onAddDeveloper(developerData:any){
    this.DeveloperList.push({
      fname : developerData.fname,
      lname : developerData.lname,
      contact : developerData.contact,
      salary : developerData.salary
    });
    console.log(this.DeveloperList);
  }
  onAddDesigner(designerData:any){
    this.DesignerList.push({
      fname : designerData.fname,
      lname : designerData.lname,
      contact : designerData.contact,
      salary : designerData.salary
    });
    console.log(this.DesignerList);
  }
}
