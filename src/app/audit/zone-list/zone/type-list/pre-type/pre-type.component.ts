import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { AuditZoneService } from 'src/app/shared/services/audit-zone.service';
import { AuditService } from 'src/app/shared/services/audit.service';

@Component({
  selector: 'app-pre-type',
  templateUrl: './pre-type.component.html',
  styleUrls: ['./pre-type.component.scss']
})
export class PreTypeComponent implements OnInit {

  audit?: any;
  zone?: any;
  type?: string;
  overFlow: boolean = false;

  constructor(private route: ActivatedRoute,
    private auditService: AuditService,
    private auditZoneService: AuditZoneService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(({type}) => {
      this.type = type;
    });

    this.route.params.pipe(
      switchMap(({ aid }) => this.auditService.getSingleAudit(aid)),
    ).subscribe((audit: any) => {
      this.audit = audit;
    });

    this.route.params.pipe(
      switchMap(({ aid, zid }) => this.auditZoneService.getSingleAuditZone(aid, zid)),
    ).subscribe((zone: any) => {
      this.zone = zone;
    });
  }

  getOverFlow(overFlow: boolean) {
    this.overFlow = overFlow;
  }

}
