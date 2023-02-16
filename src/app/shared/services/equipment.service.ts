import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  rootUrl = environment.url;

  equipmentSubTypeData: any;
  equipments: any = [];

  constructor(private http: HttpClient,
  ) { }

  getSingleEquipmentByName(equipmentName: string): Observable<any> {
    return this.http.get(`${this.rootUrl}equipment/${equipmentName}/`);
  }
  getAllEquipments(): Observable<any> {
    return this.http.get(`${this.rootUrl}equipment/`);
  }

  getEquipmentTypes(equipmentId: string): Observable<any> {
    return this.http.get(`${this.rootUrl}equipmentType/equipment/${equipmentId}/`);
  }

  getSingleEquipmentSubType(subTypeId: number): Observable<any> {
    return this.http.get(`${this.rootUrl}equipmentSubType/${subTypeId}/`);
  }
  getEquipmentSubTypes(auditId: number, equipmentId: string): Observable<any> {
    return this.http.get(`${this.rootUrl}equipmentSubType/audit/${auditId}/equipment/${equipmentId}/`);
  }
  createEquipmentSubType(equipmentSubTypeData: any): Observable<any> {
    return this.http.post(`${this.rootUrl}equipmentSubType/`, equipmentSubTypeData);
  }
  updateEquipmentSubType(equipmentSubTypeData: any): Observable<any> {
    return this.http.put(`${this.rootUrl}equipmentSubType/${equipmentSubTypeData.id}/`, equipmentSubTypeData);
  }
  deleteEquipmentSubType(equipmentSubTypeId: number): Observable<any> {
    return this.http.delete(`${this.rootUrl}equipmentSubType/${equipmentSubTypeId}/`);
  }

  getEquipmentTypeFormSchema(typeId: number): Observable<any> {
    return this.http.get(`${this.rootUrl}schema/type/${typeId}/`);
  }
  getEquipmentFormDataBySubType(subTypeId: number): Observable<any> {
    return this.http.get(`${this.rootUrl}equipmentForm/subType/${subTypeId}/`);
  }
  createEquipmentFormData(equipmentFormData: any): Observable<any> {
    return this.http.post(`${this.rootUrl}equipmentForm/`, equipmentFormData);
  }
  updateEquipmentFormData(equipmentFormData: any): Observable<any> {
    return this.http.put(`${this.rootUrl}equipmentForm/${equipmentFormData.id}/`, equipmentFormData);
  }

  // getSinglePlugLoad(auditId: number, zoneId: number, id: number) {
  //   return this.http.get(`${this.rootUrl}equipment_plugload/audit/${auditId}/zone/${zoneId}/equipment/${id}/`);
  // }
  // getAllPlugLoadByZone(auditId: number, zoneId: number): Observable<any> {
  //   return this.http.get(`${this.rootUrl}equipment_plugload/audit/${auditId}/zone/${zoneId}/`);
  // }
  // createPlugLoad(data: any): Observable<any> {
  //   return this.http.post(`${this.rootUrl}equipment_plugload/`, data);
  // }
  // updatePlugLoad(data: any): Observable<any> {
  //   return this.http.put(`${this.rootUrl}equipment_plugload/audit/${data.auditId}/zone/${data.zoneId}/equipment/${data.id}/`, data);
  // }
  // deletePlugLoad(auditId: number, zoneId: number, id: number): Observable<any> {
  //   return this.http.delete(`${this.rootUrl}equipment_plugload/audit/${auditId}/zone/${zoneId}/equipment/${id}/`);
  // }

  // getSingleRefrigenrationByZone(auditId: number, zoneId: number, id: number) {
  //   return this.http.get(`${this.rootUrl}equipment_refrigeration/audit/${auditId}/zone/${zoneId}/equipment/${id}/`);
  // }
  // getAllRefrigenrationByZone(auditId: number, zoneId: number): Observable<any> {
  //   return this.http.get(`${this.rootUrl}equipment_refrigeration/audit/${auditId}/zone/${zoneId}/`);
  // }
  // createRefrigenration(data: any): Observable<any> {
  //   return this.http.post(`${this.rootUrl}equipment_refrigeration/`, data);
  // }
  // updateRefrigenration(data: any): Observable<any> {
  //   return this.http.put(`${this.rootUrl}equipment_refrigeration/audit/${data.auditId}/zone/${data.zoneId}/equipment/${data.id}/`, data);
  // }
  // deleteRefrigenration(auditId: number, zoneId: number, id: number): Observable<any> {
  //   return this.http.delete(`${this.rootUrl}equipment_refrigeration/audit/${auditId}/zone/${zoneId}/equipment/${id}/`);
  // }

  // getSingleLightingByZone(auditId: number, zoneId: number, id: number) {
  //   return this.http.get(`${this.rootUrl}equipment_Lighting/audit/${auditId}/zone/${zoneId}/equipment/${id}/`);
  // }
  // getAllLightingByZone(auditId: number, zoneId: number): Observable<any> {
  //   return this.http.get(`${this.rootUrl}equipment_Lighting/audit/${auditId}/zone/${zoneId}/`);
  // }
  // createLighting(data: any): Observable<any> {
  //   return this.http.post(`${this.rootUrl}equipment_Lighting/`, data);
  // }
  // updateLighting(data: any): Observable<any> {
  //   return this.http.put(`${this.rootUrl}equipment_Lighting/audit/${data.auditId}/zone/${data.zoneId}/equipment/${data.id}/`, data);
  // }
  // deleteLighting(auditId: number, zoneId: number, id: number): Observable<any> {
  //   return this.http.delete(`${this.rootUrl}equipment_Lighting/audit/${auditId}/zone/${zoneId}/equipment/${id}/`);
  // }

  // getSingleWaterHeaterByZone(auditId: number, zoneId: number, id: number) {
  //   return this.http.get(`${this.rootUrl}equipment_WaterHeating/audit/${auditId}/zone/${zoneId}/equipment/${id}/`);
  // }
  // getAllWaterHeaterByZone(auditId: number, zoneId: number): Observable<any> {
  //   return this.http.get(`${this.rootUrl}equipment_WaterHeating/audit/${auditId}/zone/${zoneId}/`);
  // }
  // createWaterHeater(data: any): Observable<any> {
  //   return this.http.post(`${this.rootUrl}equipment_WaterHeating/audit/${data.auditId}/zone/${data.zoneId}/`, data);
  // }
  // updateWaterHeater(data: any): Observable<any> {
  //   return this.http.put(`${this.rootUrl}equipment_WaterHeating/audit/${data.auditId}/zone/${data.zoneId}/equipment/${data.id}/`, data);
  // }
  // deleteWaterHeater(auditId: number, zoneId: number, id: number): Observable<any> {
  //   return this.http.delete(`${this.rootUrl}equipment_WaterHeating/audit/${auditId}/zone/${zoneId}/equipment/${id}/`);
  // }

  // getSingleHVACByZone(auditId: number, zoneId: number, id: number) {
  //   return this.http.get(`${this.rootUrl}equipment_HVAC/audit/${auditId}/zone/${zoneId}/equipment/${id}/`);
  // }
  // getAllHVACByZone(auditId: number, zoneId: number): Observable<any> {
  //   return this.http.get(`${this.rootUrl}equipment_HVAC/audit/${auditId}/zone/${zoneId}/`);
  // }
  // createHVAC(data: any): Observable<any> {
  //   return this.http.post(`${this.rootUrl}equipment_HVAC/`, data);
  // }
  // updateHVAC(data: any): Observable<any> {
  //   return this.http.put(`${this.rootUrl}equipment_HVAC/audit/${data.auditId}/zone/${data.zoneId}/equipment/${data.id}/`, data);
  // }
  // deleteHVAC(auditId: number, zoneId: number, id: number): Observable<any> {
  //   return this.http.delete(`${this.rootUrl}equipment_HVAC/audit/${auditId}/zone/${zoneId}/equipment/${id}/`);
  // }

  // getSingleMotorByZone(auditId: number, zoneId: number, id: number) {
  //   return this.http.get(`${this.rootUrl}equipment_Motors/audit/${auditId}/zone/${zoneId}/equipment/${id}/`);
  // }
  // getAllMotorByZone(auditId: number, zoneId: number): Observable<any> {
  //   return this.http.get(`${this.rootUrl}equipment_Motors/audit/${auditId}/zone/${zoneId}/`);
  // }
  // createMotor(data: any): Observable<any> {
  //   return this.http.post(`${this.rootUrl}equipment_Motors/`, data);
  // }
  // updateMotor(data: any): Observable<any> {
  //   return this.http.put(`${this.rootUrl}equipment_Motors/audit/${data.auditId}/zone/${data.zoneId}/equipment/${data.id}/`, data);
  // }
  // deleteMotor(auditId: number, zoneId: number, id: number): Observable<any> {
  //   return this.http.delete(`${this.rootUrl}equipment_Motors/audit/${auditId}/zone/${zoneId}/equipment/${id}/`);
  // }
}
