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
    return this.http.post(`${this.rootUrl}file/`, formData);
  }

  downloadFile(auditId: number): Observable<any> {
    return this.http.get(`${this.rootUrl}download/${auditId}/`);
  }

  getSingleAudit(auditId: number): Observable<any> {
    return this.http.get(`${this.rootUrl}audits/${auditId}/`);
  }

  getAllAudit(): Observable<any> {
    return this.http.get(`${this.rootUrl}audits/`);
  }

  createAudit(data: any): Observable<any> {
    return this.http.post(`${this.rootUrl}audits/`, data);
  }

  updateAudit(data: any): Observable<any> {
    return this.http.put(`${this.rootUrl}audits/${data.auditId}/`, data);
  }

  deleteAudit(id: number): Observable<any> {
    return this.http.delete(`${this.rootUrl}audits/${id}/`);
  }

  getAuditorInfo(auditId: number): Observable<any> {
    return this.http.get(`${this.rootUrl}preauditauditorinfo/${auditId}/`);
  }
  createAuditorInfo(data: any): Observable<any> {
    return this.http.post(`${this.rootUrl}preauditauditorinfo/`, data);
  }
  updateAuditorInfo(auditId: number, data: any): Observable<any> {
    return this.http.put(`${this.rootUrl}preauditauditorinfo/${auditId}/`, data);
  }

  getGeneralInfo(auditId: number): Observable<any> {
    return this.http.get(`${this.rootUrl}preauditgeneralclientinfo/${auditId}/`);
  }
  createGeneralInfo(data: any): Observable<any> {
    return this.http.post(`${this.rootUrl}preauditgeneralclientinfo/`, data);
  }
  updateGeneralInfo(auditId: number, data: any): Observable<any> {
    return this.http.put(`${this.rootUrl}preauditgeneralclientinfo/${auditId}/`, data);
  }

  getPreauditinterviewee(auditId: number): Observable<any> {
    return this.http.get(`${this.rootUrl}preauditinterviewee/${auditId}/`);
  }
  createInterviewee(data: any): Observable<any> {
    return this.http.post(`${this.rootUrl}preauditinterviewee/`, data);
  }
  updateInterviewee(auditId: number, data: any): Observable<any> {
    return this.http.put(`${this.rootUrl}preauditinterviewee/${auditId}/`, data);
  }

  getPreauditoperationhours(auditId: number): Observable<any> {
    return this.http.get(`${this.rootUrl}preauditoperationhours/${auditId}/`);
  }
  createPreauditoperationhours(data: any): Observable<any> {
    return this.http.post(`${this.rootUrl}preauditoperationhours/`, data);
  }
  updatePreauditoperationhours(auditId: number, data: any): Observable<any> {
    return this.http.put(`${this.rootUrl}preauditoperationhours/${auditId}/`, data);
  }

  getPreauditarea(auditId: number): Observable<any> {
    return this.http.get(`${this.rootUrl}preauditarea/${auditId}/`);
  }
  createPreauditarea(data: any): Observable<any> {
    return this.http.post(`${this.rootUrl}preauditarea/`, data);
  }
  updatePreauditarea(auditId: number, data: any): Observable<any> {
    return this.http.put(`${this.rootUrl}preauditarea/${auditId}/`, data);
  }

  getPreauditage(auditId: number): Observable<any> {
    return this.http.get(`${this.rootUrl}preauditage/${auditId}/`);
  }
  createPreauditage(data: any): Observable<any> {
    return this.http.post(`${this.rootUrl}preauditage/`, data);
  }
  updatePreauditage(auditId: number, data: any): Observable<any> {
    return this.http.put(`${this.rootUrl}preauditage/${auditId}/`, data);
  }

  getPreaudithvacmaintainence(auditId: number): Observable<any> {
    return this.http.get(`${this.rootUrl}preaudithvacmaintainence/${auditId}/`);
  }
  createPreaudithvacmaintainence(data: any): Observable<any> {
    return this.http.post(`${this.rootUrl}preaudithvacmaintainence/`, data);
  }
  updatePreaudithvacmaintainence(auditId: number, data: any): Observable<any> {
    return this.http.put(`${this.rootUrl}preaudithvacmaintainence/${auditId}/`, data);
  }

  getPreauditother(auditId: number): Observable<any> {
    return this.http.get(`${this.rootUrl}preauditother/${auditId}/`);
  }
  createPreauditother(data: any): Observable<any> {
    return this.http.post(`${this.rootUrl}preauditother/`, data);
  }
  updatePreauditother(auditId: number, data: any): Observable<any> {
    return this.http.put(`${this.rootUrl}preauditother/${auditId}/`, data);
  }

  getPreauditgeneralsiteaccessnotes(auditId: number): Observable<any> {
    return this.http.get(`${this.rootUrl}preauditgeneralsiteaccessnotes/${auditId}/`);
  }
  createPreauditgeneralsiteaccessnotes(data: any): Observable<any> {
    return this.http.post(`${this.rootUrl}preauditgeneralsiteaccessnotes/`, data);
  }
  updatePreauditgeneralsiteaccessnotes(auditId: number, data: any): Observable<any> {
    return this.http.put(`${this.rootUrl}preauditgeneralsiteaccessnotes/${auditId}/`, data);
  }

}
