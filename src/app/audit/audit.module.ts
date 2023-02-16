import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormsModule as AppFormsModule } from '../form/form.module';
import { NgbDropdownModule, NgbNavModule, NgbTooltipModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { AuditRoutingModule } from './audit-routing.module';
import { AuditComponent } from './audit.component';
import { PreAuditComponent } from './pre-audit/pre-audit.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuditService } from '../shared/services/audit.service';
import { AuthInterceptor } from '../shared/interceptor/auth.interceptor';
import { ErrorInterceptor } from '../shared/interceptor/error.interceptor';
import { ZoneListComponent } from './zone-list/zone-list.component';
// import { PhotosComponent } from '../audit/photos/photos.component';
import { AuditZoneService } from '../shared/services/audit-zone.service';
import { PreZoneComponent } from './zone-list/pre-zone/pre-zone.component';
import { ZoneComponent } from './zone-list/zone/zone.component';
import { TypeListComponent } from './zone-list/zone/type-list/type-list.component';
import { EquipmentService } from '../shared/services/equipment.service';
import { PreTypeComponent } from './zone-list/zone/type-list/pre-type/pre-type.component';
import { TypeComponent } from './zone-list/zone/type-list/type/type.component';
import { PhotosComponent } from './photos/photos.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    NgbNavModule,
    NgbDropdownModule,
    AuditRoutingModule,
    NgbTooltipModule,
    AppFormsModule,
    NgbTypeaheadModule,
    HttpClientModule,
    // CompanycamModule,
  ],
  providers: [
    AuditService,
    AuditZoneService,
    EquipmentService,
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: AuthInterceptor,
    },
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: ErrorInterceptor,
    },
  ],
  declarations: [
    AuditComponent,
    PreAuditComponent,
    ZoneListComponent,
    // PhotosComponent,
    PreZoneComponent,
    ZoneComponent,
    TypeListComponent,
    PreTypeComponent,
    TypeComponent,
    PhotosComponent,
    // ZoneComponent,
    // TypeComponent,
    // PreZoneComponent,
    // PreTypeComponent,
    // TypeListComponent,
    // AccessControlComponent,
    // PhotosComponent,
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuditModule {
}
