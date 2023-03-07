import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuditService {

  rootUrl = environment.url;

  constructor(private http: HttpClient,) { }

  uploadFileData(formData: any): Observable<any> {
    return this.http.post(`${this.rootUrl}api/file/`, formData);
  }

  downloadFile(auditId: number): Observable<any> {
    return this.http.get(`${this.rootUrl}api/download/${auditId}/`);
  }

  getSingleAudit(auditId: number): Observable<any> {
    return this.http.get(`${this.rootUrl}api/audits/${auditId}/`);
  }

  getAllAudit(): Observable<any> {
    return this.http.get(`${this.rootUrl}api/audits/`);
  }

  createAudit(data: any): Observable<any> {
    return this.http.post(`${this.rootUrl}api/audits/`, data);
  }

  updateAudit(data: any): Observable<any> {
    return this.http.put(`${this.rootUrl}api/audits/${data.auditId}/`, data);
  }

  deleteAudit(id: number): Observable<any> {
    return this.http.delete(`${this.rootUrl}api/audits/${id}/`);
  }

  getAuditorInfo(auditId: number): Observable<any> {
    return this.http.get(`${this.rootUrl}api/preauditauditorinfo/${auditId}/`);
  }
  createAuditorInfo(data: any): Observable<any> {
    return this.http.post(`${this.rootUrl}api/preauditauditorinfo/`, data);
  }
  updateAuditorInfo(auditId: number, data: any): Observable<any> {
    return this.http.put(`${this.rootUrl}api/preauditauditorinfo/${auditId}/`, data);
  }

  getGeneralInfo(auditId: number): Observable<any> {
    return this.http.get(`${this.rootUrl}api/preauditgeneralclientinfo/${auditId}/`);
  }
  createGeneralInfo(data: any): Observable<any> {
    return this.http.post(`${this.rootUrl}api/preauditgeneralclientinfo/`, data);
  }
  updateGeneralInfo(auditId: number, data: any): Observable<any> {
    return this.http.put(`${this.rootUrl}api/preauditgeneralclientinfo/${auditId}/`, data);
  }

  getPreauditinterviewee(auditId: number): Observable<any> {
    return this.http.get(`${this.rootUrl}api/preauditinterviewee/${auditId}/`);
  }
  createInterviewee(data: any): Observable<any> {
    return this.http.post(`${this.rootUrl}api/preauditinterviewee/`, data);
  }
  updateInterviewee(auditId: number, data: any): Observable<any> {
    return this.http.put(`${this.rootUrl}api/preauditinterviewee/${auditId}/`, data);
  }

  getPreauditoperationhours(auditId: number): Observable<any> {
    return this.http.get(`${this.rootUrl}api/preauditoperationhours/${auditId}/`);
  }
  createPreauditoperationhours(data: any): Observable<any> {
    return this.http.post(`${this.rootUrl}api/preauditoperationhours/`, data);
  }
  updatePreauditoperationhours(auditId: number, data: any): Observable<any> {
    return this.http.put(`${this.rootUrl}api/preauditoperationhours/${auditId}/`, data);
  }

  getPreauditarea(auditId: number): Observable<any> {
    return this.http.get(`${this.rootUrl}api/preauditarea/${auditId}/`);
  }
  createPreauditarea(data: any): Observable<any> {
    return this.http.post(`${this.rootUrl}api/preauditarea/`, data);
  }
  updatePreauditarea(auditId: number, data: any): Observable<any> {
    return this.http.put(`${this.rootUrl}api/preauditarea/${auditId}/`, data);
  }

  getPreauditage(auditId: number): Observable<any> {
    return this.http.get(`${this.rootUrl}api/preauditage/${auditId}/`);
  }
  createPreauditage(data: any): Observable<any> {
    return this.http.post(`${this.rootUrl}api/preauditage/`, data);
  }
  updatePreauditage(auditId: number, data: any): Observable<any> {
    return this.http.put(`${this.rootUrl}api/preauditage/${auditId}/`, data);
  }

  getPreaudithvacmaintainence(auditId: number): Observable<any> {
    return this.http.get(`${this.rootUrl}api/preaudithvacmaintainence/${auditId}/`);
  }
  createPreaudithvacmaintainence(data: any): Observable<any> {
    return this.http.post(`${this.rootUrl}api/preaudithvacmaintainence/`, data);
  }
  updatePreaudithvacmaintainence(auditId: number, data: any): Observable<any> {
    return this.http.put(`${this.rootUrl}api/preaudithvacmaintainence/${auditId}/`, data);
  }

  getPreauditother(auditId: number): Observable<any> {
    return this.http.get(`${this.rootUrl}api/preauditother/${auditId}/`);
  }
  createPreauditother(data: any): Observable<any> {
    return this.http.post(`${this.rootUrl}api/preauditother/`, data);
  }
  updatePreauditother(auditId: number, data: any): Observable<any> {
    return this.http.put(`${this.rootUrl}api/preauditother/${auditId}/`, data);
  }

  getPreauditgeneralsiteaccessnotes(auditId: number): Observable<any> {
    return this.http.get(`${this.rootUrl}api/preauditgeneralsiteaccessnotes/${auditId}/`);
  }
  createPreauditgeneralsiteaccessnotes(data: any): Observable<any> {
    return this.http.post(`${this.rootUrl}api/preauditgeneralsiteaccessnotes/`, data);
  }
  updatePreauditgeneralsiteaccessnotes(auditId: number, data: any): Observable<any> {
    return this.http.put(`${this.rootUrl}api/preauditgeneralsiteaccessnotes/${auditId}/`, data);
  }

}
