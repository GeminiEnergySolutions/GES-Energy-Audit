import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuditZoneService {

  rootUrl = environment.url;

  constructor(private http: HttpClient,
  ) { }

  getSingleAuditZone(auditId: number, zoneId: number): Observable<any> {
    return this.http.get(`${this.rootUrl}AuditZoneTable_View/${auditId}/${zoneId}/`);
  }

  getAllAuditZone(auditId: number): Observable<any> {
    return this.http.get(`${this.rootUrl}AuditZoneTable_View/${auditId}/`);
  }

  createAuditZone(data: any, auditId: number): Observable<any> {
    return this.http.post(`${this.rootUrl}AuditZoneTable_View/`, data);
  }

  updateAuditZone(data: any, auditId: number): Observable<any> {
    return this.http.put(`${this.rootUrl}AuditZoneTable_View/${auditId}/${data.zoneId}/`, data);
  }

  deleteAuditZone(id: number, auditId: number): Observable<any> {
    return this.http.delete(`${this.rootUrl}AuditZoneTable_View/${auditId}/${id}`);
  }
}
