import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { AuditZoneService } from 'src/app/shared/services/audit-zone.service';
import { EquipmentService } from 'src/app/shared/services/equipment.service';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss']
})
export class ZoneComponent implements OnInit {

  zone: any;

  constructor(private auditZoneService: AuditZoneService,
    public equipmentService: EquipmentService,
    public route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(({ aid, zid }) => this.auditZoneService.getSingleAuditZone(aid, zid)),
    ).subscribe((zone: any) => {
      this.zone = zone;
    });

    this.route.params.pipe(
      switchMap(({ aid, zid }) => this.equipmentService.getAllEquipments()),
    ).subscribe((res: any[]) => {
      this.equipmentService.equipments = res;
    });
  }

}
