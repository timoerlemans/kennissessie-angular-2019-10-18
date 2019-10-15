import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowFrontendFrameworksComponent } from './show-frontend-frameworks/show-frontend-frameworks.component';



@NgModule({
  declarations: [ShowFrontendFrameworksComponent],
  exports: [
    ShowFrontendFrameworksComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ShowFrontendFrameworksModule { }
