
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
    providedIn: 'root'
})
export class PdfService {
	uri = "https://ctapi.kilobytetech.com/api/folder/5d70efcfdaa6fb5d96ee621b/addPdf"
    url="https://ctapi.kilobytetech.com/api/folder"

	constructor(private http: HttpClient){

	}
	
	uploadpdf(){
		return this.http.post(`${this.uri}`,{})
    }
    getpdf(){
        return this.http.get(`${this.url}`,{})
        
}
    }
    

