import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PdfComponent } from './pdf/pdf.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  {path:'pdf',component:PdfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}
