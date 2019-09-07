import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RootComponent } from './root/root.component';
import { PdfComponent } from './pdf/pdf.component';
import {HttpModule} from '@angular/http';
import{NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";  
import { HttpClientModule } from '@angular/common/http';
import { NgxFileDropModule } from 'ngx-file-drop';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RootComponent,
    PdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,NgbModule,FormsModule,HttpClientModule,NgxFileDropModule
  ],
  providers: [RootComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
