import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from 'ng-bootstrap-ext';
import { switchMap, tap } from 'rxjs';
import { AuditZoneService } from 'src/app/shared/services/audit-zone.service';
import { AuditService } from 'src/app/shared/services/audit.service';
import { EquipmentService } from 'src/app/shared/services/equipment.service';


@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent {

  constructor(public equipmentService: EquipmentService,
    private route: ActivatedRoute,
  ) { }

}
