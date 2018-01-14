import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {GridModule, PDFModule,ExcelModule} from "@progress/kendo-angular-grid";
import {DropDownListModule, DropDownsModule} from "@progress/kendo-angular-dropdowns";
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
      GridModule,
      DropDownListModule,
      DropDownsModule,
      PDFModule,
      ExcelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
