import { Component, OnInit } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { PdfService } from './pdf.service';
@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent  {
  data: any;
  constructor(private pdfservice:PdfService) {
    }
  uploadpdf(){
    this.pdfservice.uploadpdf().subscribe(result=>{
      console.log('result is ', result);
      if(result['message'] === 'Successfull') {
        alert('Successful uploaded')
         }
          else {
        alert('not uploaded');
      }
    })
  }

  getpdf() {
  	  	this.data=this.pdfservice.getpdf();
  }
    
  
    
    
  public files: NgxFileDropEntry[] = [];
 
  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {
 
      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
 
          // Here you can access the real file
          console.log(droppedFile.relativePath, file);
 
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }
 
  public fileOver(event){
    console.log(event);
  }
 
  public fileLeave(event){
    console.log(event);
  }


}
