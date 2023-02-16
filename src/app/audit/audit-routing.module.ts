import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnsavedChangesGuard } from '../unsaved-changes.guard';
import { AuditComponent } from './audit.component';
import { PhotosComponent } from './photos/photos.component';
import { PreAuditComponent } from './pre-audit/pre-audit.component';
import { PreZoneComponent } from './zone-list/pre-zone/pre-zone.component';
import { ZoneListComponent } from './zone-list/zone-list.component';
import { PreTypeComponent } from './zone-list/zone/type-list/pre-type/pre-type.component';
import { TypeListComponent } from './zone-list/zone/type-list/type-list.component';
import { TypeComponent } from './zone-list/zone/type-list/type/type.component';
import { ZoneComponent } from './zone-list/zone/zone.component';

const routes: Routes = [
  {
    path: '',
    component: PreAuditComponent,
    children: [ 
      {
        path: ':aid',
        component: AuditComponent,
        canDeactivate: [UnsavedChangesGuard],
        children: [
          { path: 'zones', component: ZoneListComponent },
          { path: 'photos', component: PhotosComponent },
          // {path: 'access', component: AccessControlComponent},
        ],
      },
    ],
  },
  {
    path: ':aid/zones',
    component: PreZoneComponent,
    children: [
      {
        path: ':zid',
        component: ZoneComponent,
        children: [
          { path: ':type', component: TypeListComponent },
        ],
      },
    ],
  },
  {
    path: ':aid/zones/:zid/:type',
    component: PreTypeComponent,
    children: [
      {
        path: ':tid', component: TypeComponent,
        // canDeactivate: [UnsavedChangesGuard]
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuditRoutingModule {
}
