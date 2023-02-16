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
  createAuditorInfo(auditId: number, data: any): Observable<any> {
    return this.http.post(`${this.rootUrl}preauditauditorinfo/${auditId}/`, data);
  }
  updateAuditorInfo(auditId: number, data: any): Observable<any> {
    return this.http.put(`${this.rootUrl}preauditauditorinfo/${auditId}/`, data);
  }

  getGeneralInfo(auditId: number): Observable<any> {
    return this.http.get(`${this.rootUrl}preauditgeneralclientinfo/${auditId}/`);
  }
  createGeneralInfo(auditId: number, data: any): Observable<any> {
    return this.http.post(`${this.rootUrl}preauditgeneralclientinfo/${auditId}/`, data);
  }
  updateGeneralInfo(auditId: number, data: any): Observable<any> {
    return this.http.put(`${this.rootUrl}preauditgeneralclientinfo/${auditId}/`, data);
  }

  getPreauditinterviewee(auditId: number): Observable<any> {
    return this.http.get(`${this.rootUrl}preauditinterviewee/${auditId}/`);
  }
  createInterviewee(auditId: number, data: any): Observable<any> {
    return this.http.post(`${this.rootUrl}preauditinterviewee/${auditId}/`, data);
  }
  updateInterviewee(auditId: number, data: any): Observable<any> {
    return this.http.put(`${this.rootUrl}preauditinterviewee/${auditId}/`, data);
  }

  getPreauditoperationhours(auditId: number): Observable<any> {
    return this.http.get(`${this.rootUrl}preauditoperationhours/${auditId}/`);
  }
  createPreauditoperationhours(auditId: number, data: any): Observable<any> {
    return this.http.post(`${this.rootUrl}preauditoperationhours/${auditId}/`, data);
  }
  updatePreauditoperationhours(auditId: number, data: any): Observable<any> {
    return this.http.put(`${this.rootUrl}preauditoperationhours/${auditId}/`, data);
  }

  getPreauditarea(auditId: number): Observable<any> {
    return this.http.get(`${this.rootUrl}preauditarea/${auditId}/`);
  }
  createPreauditarea(auditId: number, data: any): Observable<any> {
    return this.http.post(`${this.rootUrl}preauditarea/${auditId}/`, data);
  }
  updatePreauditarea(auditId: number, data: any): Observable<any> {
    return this.http.put(`${this.rootUrl}preauditarea/${auditId}/`, data);
  }

  getPreauditage(auditId: number): Observable<any> {
    return this.http.get(`${this.rootUrl}preauditage/${auditId}/`);
  }
  createPreauditage(auditId: number, data: any): Observable<any> {
    return this.http.post(`${this.rootUrl}preauditage/${auditId}/`, data);
  }
  updatePreauditage(auditId: number, data: any): Observable<any> {
    return this.http.put(`${this.rootUrl}preauditage/${auditId}/`, data);
  }

  getPreaudithvacmaintainence(auditId: number): Observable<any> {
    return this.http.get(`${this.rootUrl}preaudithvacmaintainence/${auditId}/`);
  }
  createPreaudithvacmaintainence(auditId: number, data: any): Observable<any> {
    return this.http.post(`${this.rootUrl}preaudithvacmaintainence/${auditId}/`, data);
  }
  updatePreaudithvacmaintainence(auditId: number, data: any): Observable<any> {
    return this.http.put(`${this.rootUrl}preaudithvacmaintainence/${auditId}/`, data);
  }

  getPreauditother(auditId: number): Observable<any> {
    return this.http.get(`${this.rootUrl}preauditother/${auditId}/`);
  }
  createPreauditother(auditId: number, data: any): Observable<any> {
    return this.http.post(`${this.rootUrl}preauditother/${auditId}/`, data);
  }
  updatePreauditother(auditId: number, data: any): Observable<any> {
    return this.http.put(`${this.rootUrl}preauditother/${auditId}/`, data);
  }

  getPreauditgeneralsiteaccessnotes(auditId: number): Observable<any> {
    return this.http.get(`${this.rootUrl}preauditgeneralsiteaccessnotes/${auditId}/`);
  }
  createPreauditgeneralsiteaccessnotes(auditId: number, data: any): Observable<any> {
    return this.http.post(`${this.rootUrl}preauditgeneralsiteaccessnotes/${auditId}/`, data);
  }
  updatePreauditgeneralsiteaccessnotes(auditId: number, data: any): Observable<any> {
    return this.http.put(`${this.rootUrl}preauditgeneralsiteaccessnotes/${auditId}/`, data);
  }

}
