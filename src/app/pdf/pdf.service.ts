
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import{order} from '../model/order.model';


import { environment } from 'src/environments/environment';



@Injectable({
    providedIn: 'root'
})
export class PdfService {
	uri = "https://ctapi.kilobytetech.com/api/folder/5d70efcfdaa6fb5d96ee621b/addPdf"
    roles: void;
    afAuth: any;
  data: Object;

   
	constructor(private http: HttpClient){
        

    }
   
	
	uploadpdf(){
        var url='https://ctapi.kilobytetech.com/api/folder/5d715b03daa6fb5d96ee6224/addPdf';
        const headers =  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzBlZmNmZGFhNmZiNWQ5NmVlNjIxYiIsImRhdGUiOiIyMDE5LTA5LTA3VDE4OjM1OjQwLjMyOFoiLCJpYXQiOjE1Njc4ODEzNDB9.KAbEsLehtVY8HB3-Tk6_yx57he1_YgjA3hK0dQzblwI';
        return this.http.get(url,
         {          headers: new HttpHeaders().set('Authorization', headers )
        })
    }
    

    getpdf() {
       var url='https://ctapi.kilobytetech.com/api/user/files';
        const headers =  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzBlZmNmZGFhNmZiNWQ5NmVlNjIxYiIsImRhdGUiOiIyMDE5LTA5LTA3VDE4OjM1OjQwLjMyOFoiLCJpYXQiOjE1Njc4ODEzNDB9.KAbEsLehtVY8HB3-Tk6_yx57he1_YgjA3hK0dQzblwI';
        return this.http.get(url,
       
         {          headers: new HttpHeaders().set('Authorization', headers )
          
        })
        
    .pipe(map(res => res) )
    }
        
          
  
    
    }
        
    
    


