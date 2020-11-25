import { colorservice } from './color.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProjectManagerComponent } from './project-manager/project-manager.component';
import { DeveloperComponent } from './developer/developer.component';
import { DesignerComponent } from './designer/designer.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { CommonModule } from "@angular/common";
@NgModule({
  declarations: [
    AppComponent,
    ProjectManagerComponent,
    DeveloperComponent,
    DesignerComponent,
    FormComponentComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [colorservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
