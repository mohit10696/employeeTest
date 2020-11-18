import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to employee app';

  onAddProjectManager(managerData:any){

  }
  onAddDeveloper(developerData:any){

  }
  onAddDesigner(designerData:any){

  }
}
