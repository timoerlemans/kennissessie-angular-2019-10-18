import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Frameworks } from './show-frontend-frameworks/frameworks.component';



@NgModule({
  declarations: [Frameworks],
  exports: [
    Frameworks
  ],
  imports: [
    CommonModule
  ]
})
export class ShowFrontendFrameworksModule { }
