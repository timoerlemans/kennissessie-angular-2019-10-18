import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ShowFrontendFrameworksModule} from './show-frontend-frameworks/show-frontend-frameworks.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShowFrontendFrameworksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
