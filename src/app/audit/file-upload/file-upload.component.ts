import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {

  formData: any = {};

  constructor(private dialogRef: MatDialogRef<FileUploadComponent>,
  ) {
  }

  onChangeCDD(event: any) {
    if (event.target.files.length) {
      if (event.target.files[0].type !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' && event.target.files[0].type !== 'application/vnd.ms-excel') {
        this.formData.cdd = null;
        alert('please select only required extenstions');
        return;
      }
      const fileData = event.target.files[0];
      this.formData.cdd = fileData;
      // const reader = new FileReader();

      // const [file] = event.target.files;
      // reader.readAsDataURL(file);

      // reader.onload = () => {
      //   let img = reader.result as string;
      // }
    } else {
      this.formData.cdd = null;
    }
  }
  onFileChangeHDD(event: any) {
    debugger
    if (event.target.files.length) {
      if (event.target.files[0].type !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' && event.target.files[0].type !== 'application/vnd.ms-excel') {
        this.formData.hdd = null;
        alert('please select only required extenstions');
        return;
      }
      const fileData = event.target.files[0];
      this.formData.hdd = fileData;
    } else {
      this.formData.hdd = null;
    }
  }

  onCloseDialog() {
    this.dialogRef.close(this.formData);
  }

  onClose() {
    this.dialogRef.close();
  }

}
