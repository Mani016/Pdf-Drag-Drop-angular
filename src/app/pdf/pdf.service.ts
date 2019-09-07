
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';



@Injectable({
    providedIn: 'root'
})
export class PdfService {
	uri = "https://ctapi.kilobytetech.com/api/folder/5d70efcfdaa6fb5d96ee621b/addPdf"
    url= "https://ctapi.kilobytetech.com/api/user/files"

	constructor(private http: HttpClient){

    }
   
	
	uploadpdf(){
		return this.http.post(`${this.uri}`,{})
    }
    getpdf() {
        return this.http.get(`${this.url}`, {headers: new HttpHeaders(
        {
          'Authorization': 'Bearer Token ${eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNzBlZmNmZGFhNmZiNWQ5NmVlNjIxYiIsImRhdGUiOiIyMDE5LTA5LTA3VDEzOjIyOjM0LjEzNVoiLCJpYXQiOjE1Njc4NjI1NTR9.gfuj3v1jez-7jedh-PJTiMY0cCK-X3Z7xyPY-VPme5k}',
           'Content-Type': 'application/json'
              })});
        }
    
}

