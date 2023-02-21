import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from 'ng-bootstrap-ext';
import { switchMap, tap } from 'rxjs';
import { AuditZoneService } from 'src/app/shared/services/audit-zone.service';
import { AuditService } from 'src/app/shared/services/audit.service';
import { EquipmentService } from 'src/app/shared/services/equipment.service';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.scss']
})
export class TypeListComponent implements OnInit {

  @Output() outPutOverFlow: EventEmitter<boolean> = new EventEmitter();

  auditId?: any;
  equipment?: any;
  type!: string;
  types: any = [];
  subtypes: any = [];
  subtypesPlugOutList = ['Combination Oven',
    'Convection Oven',
    'Cooking Range',
    'Stove',
    'Electric Oven',
    'Ice Maker',
    'Kitchen Ventilation',
    'Pre Rinse Spray',
    'Hot Food Cabinet',
    'Dishwasher'
  ];
  subtypesRefregenrationList = ['Freezer',
    'Walk-In Cooler Box',
    'Refrigerator',
    'Walk-In Refrigerator',
    'Walk-In Freezer'
  ];
  subtypesLightingList = ['Halogen',
    'Incandescent',
    'Linear Fluorescent',
    'CFL',
    'Low Pressure Sodium',
    'High Pressure Sodium'
  ]
  // subtypesMotors=['Motors']
  // subtypesHVAC=['HVAC']
  // subtypesWaterHeater=['WaterHeater']

  constructor(private auditService: AuditService,
    private auditZoneService: AuditZoneService,
    private equipmentService: EquipmentService,
    private route: ActivatedRoute,
    private toastService: ToastService,
  ) { }

  ngOnInit(): void {

    this.route.params.pipe(
      tap(({ aid, zid, type }) => {
        this.type = type;
        this.auditId = aid;
      }),
      switchMap(({ aid, zid, type }) => {
        return this.equipmentService.getSingleEquipmentByName(type);
      }),
    ).subscribe((equipment: any) => {
      this.equipment = equipment;
      this.equipmentService.getEquipmentTypes(equipment.id).subscribe((res: any) => {
        this.types = res;
      });
      if (this.equipment.subTypeExist) {
        this.equipmentService.getEquipmentSubTypes(this.auditId, this.route.snapshot.params.zid, equipment.id).subscribe((res: any) => {
          this.subtypes = res;
          if (this.subtypes.length * 60 > window.innerHeight - 210) {
            this.outPutOverFlow.emit(true);
          } else {
            this.outPutOverFlow.emit(false);
          }
        });
      }
      else {
        this.subtypes = [];
        this.outPutOverFlow.emit(false);
      }
    });

  }

  createType(type: any) {
    const displayType = type.name;
    const name = prompt(`New ${displayType} Name`);
    if (!name) {
      return;
    }

    let dataObj: any = {
      auditId: this.route.snapshot.params.aid,
      zoneId: this.route.snapshot.params.zid,
      typeId: type.id,
      equipmentId: this.equipment.id,
      name: name
    };

    this.equipmentService.createEquipmentSubType(dataObj).subscribe((res: any) => {
      this.subtypes.push(res);
      if (this.subtypes.length * 60 > window.innerHeight - 210) {
        this.outPutOverFlow.emit(true);
      } else {
        this.outPutOverFlow.emit(false);
      }
    });

  }

  rename(item: any) {
    const name = prompt('Rename Type', item.name);
    if (!name) {
      return;
    }

    let objData = { ...item, name };
    this.equipmentService.updateEquipmentSubType(objData).subscribe((res: any) => {
      let index = this.subtypes.indexOf(item);
      this.subtypes[index] = res;
    });

  }

  delete(item: any) {
    if (!confirm(`Are you sure you want to delete '${item.name}'?`)) {
      return;
    }

    this.equipmentService.deleteEquipmentSubType(item.id).subscribe((res: any) => {
      let index = this.subtypes.indexOf(item);
      this.subtypes.splice(index, 1);
      if (this.subtypes.length * 60 > window.innerHeight - 210) {
        this.outPutOverFlow.emit(true);
      } else {
        this.outPutOverFlow.emit(false);
      }
    })
  }

}
