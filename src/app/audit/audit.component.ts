import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from 'ng-bootstrap-ext';
import { environment } from 'src/environments/environment.prod';
import { FormComponent } from '../shared/form/form.component';
import { AuditService } from '../shared/services/audit.service';
import { FileUploadComponent } from './file-upload/file-upload.component';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss']
})
export class AuditComponent implements OnInit {

  @ViewChild('form', { static: false }) form?: FormComponent;

  // audit?: Pick<Audit, 'name' | 'auditId' | 'ACL'>;
  audit?: Pick<any, 'auditName' | 'auditId' | 'ACL'>;
  feature?: any;//Feature;
  // data?: any;//FeatureData;
  schema?: any;//Schema;
  serverUrl?: string;

  constructor(private auditService: AuditService,
    private toastService: ToastService,
    public route: ActivatedRoute,
    private dialog: MatDialog,
  ) {
    this.serverUrl = environment.url;
  }

  ngOnInit(): void {
    this.auditService.getSingleAudit(this.route.snapshot.params.aid).subscribe((res: any) => {
      this.audit = res;
    });
  }

  isSaved(): boolean {
    return !this.form?.dirty;
  }

  uploadFileDialog() {
    let dialogRef = this.dialog.open(FileUploadComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((res: any) => {
      if (res) {
        const formData = new FormData();
        formData.append('auditId', this.route.snapshot.params.aid);
        formData.append('cdd', res.cdd);
        formData.append('hdd', res.hdd);
        this.auditService.uploadFileData(formData).subscribe((res: any) => {
        });
      }
    });
  }

  // save(data: FeatureData) {
  save(data: any) {
    if (!this.audit || !this.schema) {
      return;
    }

    // let op: Observable<Feature>;
    // if (this.feature) {
    //   const update = this.featureService.data2Feature(this.schema, data);
    //   op = this.featureService.update(this.feature, update);
    // } else {
    //   const feature = this.featureService.data2Feature(this.schema, data);
    //   const {auditId, ACL} = this.audit;
    //   op = this.featureService.create({
    //     auditId,
    //     belongsTo: 'preaudit',
    //     mod: new Date().valueOf().toString(),
    //     zoneId: null,
    //     typeId: null,
    //     usn: 0,
    //     ACL,
    //     ...feature,
    //   });
    // }

    // op.subscribe((feature) => {
    //   this.feature = feature;
    //   this.toastService.success('Form', 'Successfully saved form input');
    // }, error => {
    //   this.toastService.error('Form', 'Failed to save form input', error);
    // });
  }

}
