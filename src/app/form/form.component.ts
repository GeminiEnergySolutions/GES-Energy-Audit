import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from 'ng-bootstrap-ext';
import { switchMap, tap } from 'rxjs';
import { AuditService } from '../shared/services/audit.service';
import { EquipmentService } from '../shared/services/equipment.service';

class AuditorInfo {
  preAuditauditorName: string = '';
  preAuditauditorEmail: string = '';
  preAuditauditorPhoneNumber: string = '';
}
class GenralClientInfo {
  preAuditclientName: string = '';
  preAuditclientPosition: string = '';
  preAuditclientEmail: string = '';
  preAuditclientPhoneNum: any = null;
  preAuditclientAddressLine1: string = '';
  preAuditclientAddressLine2: string = '';
  preAuditclientCity: string = '';
  preAuditclientState: string = '';
  preAuditclientZipCode: any = null;
  preAuditclientBusinessName: string = '';
  preAuditclientFacilityType: string = 'Convenience store';
  preAuditclientFacilityTypeOther: string = '';
  preAuditauditStartDate = new Date().toISOString();
  preAuditauditEndDate = '';
}
class Interviewee {
  preAuditintervieweeName: string = '';
  preAuditintervieweePosition: string = '';
  preAuditintervieweeEmail: string = '';
  preAuditintervieweePhoneNum: any = null;
}
class OperationHours {
  vacationDays: any = null;
  mondayOpening: string = '';
  mondayClosing: string = '';
  tuesdayOpening: string = '';
  tuesdayClosing: string = '';
  wednesdayOpening: string = '';
  wednesdayClosing: string = '';
  thursdayOpening: string = '';
  thursdayClosing: string = '';
  fridayOpening: string = '';
  fridayClosing: string = '';
  saturdayOpening: string = '';
  saturdayClosing: string = '';
  sundayOpening: string = '';
  sundayClosing: string = '';
  notes: string = '';
}
class Area {
  buildingTotalArea: any = null;
  buildingConditionedArea: any = null;
}
class Age {
  yearConstructed: any = null;
  yearLightSystemInstalledOrReplaced: any = null;
  yearCoolingSystemInstalledOrReplaced: any = null;
  yearHeatingSystemInstalledOrReplaced: any = null;
  yearKitchenEquipmentInstalledOrReplaced: any = null;
}
class HvacMaintenance {
  buildingHvacMaintainenceContractType: string = 'self-maintained';
  buildingHvacMaintainenceFrequency: any = null;
  buildingHvacContractorName: string = '';
  buildingHvacContractorPhoneNum: any = null;
}
class Others {
  buildingElectricUtilityCompany: string = '';
  buildingGasUtilityCompany: string = '';
  buildingGasRateStructure: string = '';
  buildingElectricRateStructure: string = '';
}
class GeneralSiteAccessAndNotes {
  hvacEquipmentLocation: string = '';
  buildingCompleteAccess: boolean = false;
  buildingGeneralNotes: string = '';
  issuesWithHeatingOrCooling: string = '';
  buildingSeasonalIssues: string = '';
  gasRemovalAfterRetrofit: boolean = false;
  operationLimitedCovid: boolean = false;
  numberOfUniqueRooms: any = null;
  bmsForEnergyManagement: boolean = false;
}


//Equipment Data Models
class PlugLoad {
  id: any = null;
  auditId: any = null;
  zoneId: any = null;
  name: string = '';
  type: string = '';
  size: string = '';
  fuelType: string = '';
  preheatEnergy: any = null;
  convectionIdleRate: any = null;
  steamIdleRate: any = null;
  ovenSize: string = '';
  panCapacity: any = null;
  ratedEnergyInputRate: any = null;
  idleEnergyRate: any = null;
  isFanUsed: boolean = false;
  fanControlEnergy: string = '';
  waterConsumption: any = null;
  numOfRacks: any = null;
  heatingElement: string = '';
  cyclePerDay: any = null;
  waterTemp: any = null;
  efficiency: any = null;
  daysUsed: any = null;
  energyStar: boolean = false;
  sanitizerType: string = '';
  loadOfDishOptimized: boolean = false;
  preRinseSprayer: boolean = false;
  cabinetVolume: any = null;
  tempInterLockedControls: boolean = false;
  smokeSensorControls: boolean = false;
  kitchenhoodCoverKitchen: boolean = false;
  temperedMakeupAir: boolean = false;
  sensorLast4Digits: any = null;
  iceHarvestRate: any = null;
  energyUseRate: any = null;
  iceType: string = '';
  machineType: string = '';
  wellInsulated: boolean = false;
  iceLevelSensor: boolean = false;
  iceLevelSensorInUse: boolean = false;
  flowRate: any = null;
  waterHeater: boolean = false;
  whenSprayerUsed = '';
  numOfBurners: any = null;
  // sensorfourdigits: any = null;
  timeused: string = '';
  notesAboutSpaceorEquipment: string = '';
  peakHrs: any = null;
  partPeakHrs: any = null;
  offPeakHrs: any = null;
  suggestedpeakHrs: any = null;
  suggestedpartPeakHrs: any = null;
  sugestedoffPeakHrs: any = null;
  equipmentCompanyName: string = '';
  equipmentModelNum: string = '';
  equipmentSerialNum: string = '';
  equipmentQuantity: any = null;
  equipmentControl: boolean = false;
  equipmentLoadWatts: any = null;
  equipmentMaxWatts: any = null;

}

class Refrigeration {
  id: any = null;
  auditId: any = null;
  zoneId: any = null;
  name: string = '';
  type: string = '';
  doorType: string = '';
  numOfDoors: any = null;
  styleType: any = null;
  totalVolume: any = null;
  plugLoadControl: boolean = false;
  dailyEnergyUsed: any = null;
  condensorCompressorType: any = null;
  energyStarRating: boolean = false;
  ledLighting: boolean = false;
  lightLumens: string = '';
  tempSetting: any = null;
  doorSealQuality: string = '';
  capacity: any = null;
  condensorFan: any = null;
  condensorClean: any = null;
  refrigerantType: string = '';
  readableNameplate: boolean = false;
  suctionLineInsulated: boolean = false;
  sensorLast4Digits: any = null;
  selfCloseDoors: boolean = false;
  heatingPower: any = null;
  location: string = '';
  variableFanSpeed: boolean = false;
  floatHeadPressureControl: boolean = false;
  defrostControl: string = '';
  condensorTemp: string = '';
  condensorCompressorSize: any = null;
  condensorPhase: any = null;
  fan: any = null;
  coilClean: boolean = false;
  quantityOfeveporator: any = null;
  quantityOfFan: any = null;
  typeOfExistingFan: string = '';
  advancedFanControl: boolean = false;
  outdoorAirEconomization: boolean = false;
  tempRange: string = '';
  fanMotorType: string = '';
  motorType: string = '';
  timeused: string = '';
  notesAboutSpaceorEquipment: string = '';
  peakHrs: any = null;
  partPeakHrs: any = null;
  offPeakHrs: any = null;
  suggestedpeakHrs: any = null;
  suggestedpartPeakHrs: any = null;
  sugestedoffPeakHrs: any = null;
  equipmentCompanyName: string = '';
  equipmentModelNum: string = '';
  equipmentSerialNum: string = '';
  equipmentQuantity: any = null;
  equipmentControl: boolean = false;
  equipmentLoadWatts: any = null;
  equipmentMaxWatts: any = null;
}

class Lighting {
  id: any = null;
  auditId: any = null;
  zoneId: any = null;
  name: string = '';
  type: string = '';
  lampPerFixtures: any = null;
  numOfFixtures: any = null;
  ceilingType: string = '';
  replacementType: string = '';
  ceilingGreaterThan10ft: boolean = false;
  typeOfControl: string = '';
  numOfLampsControlled: any = null;
  sensorLast4Digits: any = null;
  sufficientDaylightLevels: boolean = false;
  timeused: string = '';
  notesAboutSpaceorEquipment: string = '';
  peakHrs: any = null;
  partPeakHrs: any = null;
  offPeakHrs: any = null;
  suggestedpeakHrs: any = null;
  suggestedpartPeakHrs: any = null;
  sugestedoffPeakHrs: any = null;
  equipmentCompanyName: string = '';
  equipmentModelNum: string = '';
  equipmentSerialNum: string = '';
  equipmentQuantity: any = null;
  equipmentControl: boolean = false;
  equipmentLoadWatts: any = null;
  equipmentMaxWatts: any = null;
}

class WaterHating {
  id: any = null;
  auditId: any = null;
  zoneId: any = null;
  name: string = '';
  typeOfUnit: string = '';
  fuelType: string = '';
  capacity: any = null;
  heatingOutput: any = null;
  heatingInput: any = null;
  thermalEfficiency: any = null;
  electricEfficiency: any = null;
  heatingPower: any = null;
  recoveryRate: any = null;
  connection: string = '';
  waterUse: any = null;
  amperage: any = null;
  insulatedHotWaterPiping: boolean = false;
  freezeProtection: boolean = false;
  setPoint: any = null;
  timeused: string = '';
  notesAboutSpaceorEquipment: string = '';
  peakHrs: any = null;
  partPeakHrs: any = null;
  offPeakHrs: any = null;
  suggestedpeakHrs: any = null;
  suggestedpartPeakHrs: any = null;
  sugestedoffPeakHrs: any = null;
  equipmentCompanyName: string = '';
  equipmentModelNum: string = '';
  equipmentSerialNum: string = '';
  equipmentQuantity: any = null;
  equipmentControl: boolean = false;
  equipmentLoadWatts: any = null;
  equipmentMaxWatts: any = null;
}

class HVAC {
  id: any = null;
  auditId: any = null;
  zoneId: any = null;
  name: string = '';
  typeOfPackageUnit: string = '';
  make: string = '';
  yearinstalled: any = null;
  quantity: any = null;
  heatPumpType: string = '';
  nameplateReadable: boolean = false;
  hvacEER: any = null;
  hvacSEER: any = null;
  hvacHSPF: any = null;
  coolingCapacity: any = null;
  coolingCapacityTons: any = null;
  heatingOutput: any = null;
  heatingInput: any = null;
  heatingElectricEfficiency: any = null;
  heatingPower: any = null;
  variableSpeed: boolean = false;
  humidityControls: boolean = false;
  economizer: boolean = false;
  alternateSEER: any = null;
  alternateHSPF: any = null;
  thermostatType: string = '';
  businessHrsHeatSetPoint: any = null;
  businessHrsACSetPoint: any = null;
  thermostatAccess: boolean = false;
  roomTemp: any = null;
  thermostatCompany: string = '';
  thermostatChangeForNonBusinessDays: boolean = false;
  nonbusinessHrsACSetPoint: any = null;
  nonbusinessHrsHeatSetPoint: any = null;
  filterChangeFreq: any = null;
  mervRating: any = null;
  estMotorRunHrs: any = null;
  coolingDegreeDaysBusinessHrs: string = '';
  heatingDegreeDaysBusinessHrs: string = '';
  coolingDegreeDaysClosedHrs: string = '';
  heatingDegreeDaysClosedHrs: string = '';
  acTempThresholdOpen: any = null;
  heatTempThresholdOpen: any = null;
  heatTempThresholdClosed: any = null;
  acTempThresholdClosed: any = null;
  areaInsulation: boolean = false;
  lenOfServedArea: any = null;
  widthOfServedArea: any = null;
  heightOfServedArea: any = null;
  motorSensorSerial: any = null;
  interiorTempSensorSerial: any = null;
  exteriorTempSensorSerial: any = null;
  timeused: string = '';
  notesAboutSpaceorEquipment: string = '';
  peakHrs: any = null;
  partPeakHrs: any = null;
  offPeakHrs: any = null;
  suggestedpeakHrs: any = null;
  suggestedpartPeakHrs: any = null;
  sugestedoffPeakHrs: any = null;
  equipmentCompanyName: string = '';
  equipmentModelNum: string = '';
  equipmentSerialNum: string = '';
  equipmentQuantity: any = null;
  equipmentControl: boolean = false;
  equipmentLoadWatts: any = null;
  equipmentMaxWatts: any = null;
}

class Motors {
  id: any = null;
  auditId: any = null;
  zoneId: any = null;
  name: string = '';
  motorPurpose: string = '';
  motorHP: any = null;
  nameplateRotSpeed: any = null;
  measuredRotSpeed: any = null;
  synchronousRotSpeed: any = null;
  motorEfficiency: any = null;
  motorEnclosureType: string = '';
  motorRatedVoltage: any = null;
  motorFullLoadedAmps: any = null;
  motorPhase: any = null;
  motorOperationalTestConducted: boolean = false;
  motorSensorSerial: any = null;
  timeused: string = '';
  notesAboutSpaceorEquipment: string = '';
  peakHrs: any = null;
  partPeakHrs: any = null;
  offPeakHrs: any = null;
  suggestedpeakHrs: any = null;
  suggestedpartPeakHrs: any = null;
  sugestedoffPeakHrs: any = null;
  equipmentCompanyName: string = '';
  equipmentModelNum: string = '';
  equipmentSerialNum: string = '';
  equipmentQuantity: any = null;
  equipmentControl: boolean = false;
  equipmentLoadWatts: any = null;
  equipmentMaxWatts: any = null;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  // @Input() schema!: any//Schema;
  // @Input() data: any = []//FeatureData = {};
  // @Output() saved = new EventEmitter<any>();//<FeatureData>();

  dirty = false;
  auditorType: string = 'auditorInfo';
  // equipmentType: string = '';
  typeSchema: any = [];
  formData?: any = { data: {} };

  auditorInfo = new AuditorInfo();
  auditInfoNameList = ['Anthony Kinslow', 'David Yosuico', 'Dorian Britt'];

  genralClientInfo = new GenralClientInfo();
  // genralClientInfoMonthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  // genralClientInfoDayList: any = [];
  genralClientInfoFacilityType = ["Convenience store",
    "Convenience store with gas station",
    "Education - College or university",
    "Education - Elementary or middle school",
    "Education - High school",
    "Education - Preschool or daycare",
    "Education - Uncategorized",
    "Food Service - Bakery",
    "Food Service - Fast food",
    "Food Service - Other",
    "Food Service - Restaurant or cafeteria",
    "Grocery store or food market",
    "Health Care - Outpatient Clinic",
    "Health Care - Outpatient Diagnostic",
    "Health Care - Uncategorized",
    "Lodging - Hotel",
    "Laboratory",
    "Lodging - Motel or inn",
    "Lodging - Other",
    "Nursing Home",
    "Office - Administrative or Professional",
    "Office - Bank or other financial",
    "Office - Government",
    "Office - Medical non diagnostic",
    "Office - Mixed use",
    "Office - Other",
    "Office - Uncategorized",
    "Parking Garage",
    "Public Assembly - Arena",
    "Public Assembly - Drama theater",
    "Public Assembly - Entertainment/culture",
    "Public Assembly - Funeral home",
    "Public Assembly - Large Hall",
    "Public Assembly - Library",
    "Public Assembly - Movie Theate",
    "Public Assembly - Other",
    "Public Assembly - Recreation",
    "Public Assembly - Social/meeting",
    "Public Assembly - Uncategorized",
    "Public Safety - Courthouse",
    "Public Safety - Fire or police station",
    "Public Safety - Jailhouse",
    "Public Safety - Uncategorized",
    "Religious worship - Church",
    "Religious worship - Mosque",
    "Religious worship - Synagogue",
    "Religious worship - Other",
    "Retail - Enclosed mall",
    "Retail - Other than mall",
    "Retail - Small Box (< 50K sf)",
    "Retail - Strip shopping mall",
    "Retail - Uncategorized",
    "Retail - Vehicle dealership/showroom",
    "Service - Art/Video/Photography Studio",
    "Service - Dry-cleaning or Laun",
    "Service - Industrial shop",
    "Service - Other service",
    "Service - Post office or postal center",
    "Service - Repair shop",
    "Service - Uncategorized",
    "Service - Vehicle service/repair shop",
    "Service - Vehicle storage",
    "Transportation Terminal",
    "Vacant",
    "Warehouse - Distribution or Shipping center",
    "Warehouse - Non-refrigerated",
    "Warehouse - Refrigerated",
    "Warehouse - Self-storage",
    "Warehouse - Uncategorized"
  ];

  interviewee = new Interviewee();
  operationHours = new OperationHours();
  area = new Area();
  age = new Age();
  hvacMaintenance = new HvacMaintenance();
  others = new Others();

  generalSiteAccessAndNotes = new GeneralSiteAccessAndNotes();


  ///Eqipment Data Models
  equipmentPlugLoad = new PlugLoad();
  equipmentRefrigeration = new Refrigeration();
  equipmentLighting = new Lighting();
  equipmentWaterHating = new WaterHating();
  equipmentHVAC = new HVAC();
  equipmentMotors = new Motors();

  constructor(private auditService: AuditService,
    public equipmentService: EquipmentService,
    private route: ActivatedRoute,
    private toastService: ToastService,
    private datePipe: DatePipe,
  ) {
    this.genralClientInfo.preAuditauditEndDate = '';
  }

  ngOnInit(): void {
    this.route.params.pipe(
      // tap(({ aid, zid, type, tid }) => this.equipmentType = type),
      switchMap(({ aid, zid, type, tid }) => {
        if (tid) {
          return this.equipmentService.getSingleEquipmentSubType(tid);
          // if (type === 'Plugload') {
          //   return this.equipmentService.getSinglePlugLoad(aid, zid, tid);
          // }
          // else if (type === 'Refrigeration') {
          //   return this.equipmentService.getSingleRefrigenrationByZone(aid, zid, tid);
          // }
          // else if (type === 'Lighting') {
          //   return this.equipmentService.getSingleLightingByZone(aid, zid, tid);
          // }
          // else if (type === 'WaterHeater') {
          //   return this.equipmentService.getSingleWaterHeaterByZone(aid, zid, tid)
          // }
          // else if (type === 'HVAC') {
          //   return this.equipmentService.getSingleHVACByZone(aid, zid, tid)
          // }
          // else if (type === 'Motors') {
          //   return this.equipmentService.getSingleMotorByZone(aid, zid, tid)
          // }
        }
        else {
          return 'e'
        }
      }),
    ).subscribe((subType: any) => {
      this.resetEquipmentForm();
      if (subType === 'e') {
        this.equipmentService.equipmentSubTypeData = null;
      }
      else {
        this.equipmentService.equipmentSubTypeData = subType;
        this.equipmentService.getEquipmentTypeFormSchema(subType.type.id).subscribe((schema: any) => {
          this.typeSchema = schema;
        });
        this.equipmentService.getEquipmentFormDataBySubType(subType.id).subscribe((formData: any) => {
          if (formData) {
            this.formData = formData;
          } else {
            this.formData = { data: {} };
          }
        })
        //   if (this.equipmentType === 'Plugload') {
        //     this.equipmentPlugLoad = res;
        //   }
        //   else if (this.equipmentType === 'Refrigeration') {
        //     this.equipmentRefrigeration = res;
        //   }
        //   else if (this.equipmentType === 'Lighting') {
        //     this.equipmentLighting = res;
        //   }
        //   else if (this.equipmentType === 'WaterHeater') {
        //     this.equipmentWaterHating = res;
        //   }
        //   else if (this.equipmentType === 'HVAC') {
        //     this.equipmentHVAC = res;
        //   }
        //   else {
        //     this.equipmentMotors = res;
        //   }
      }
    });
  }

  save() {

    if (!this.equipmentService.equipmentSubTypeData) {
      let returnData: any;

      let aid = this.route.snapshot.params.aid;
      let objData: any = this.restrictAndMergeData(aid);
      if (!objData) {
        this.toastService.error('Error', 'Please Fill out required fields');
        return;
      }

      if (this.auditorType === 'auditorInfo') {
        if (objData.id)
          returnData = this.auditService.updateAuditorInfo(aid, objData);
        else
          returnData = this.auditService.createAuditorInfo(aid, objData);
      }
      else if (this.auditorType === 'generalInfo') {
        if (objData.id)
          returnData = this.auditService.updateGeneralInfo(aid, objData);
        else
          returnData = this.auditService.createGeneralInfo(aid, objData);
      }
      else if (this.auditorType === 'interviwee') {
        if (objData.id)
          returnData = this.auditService.updateInterviewee(aid, objData);
        else
          returnData = this.auditService.createInterviewee(aid, objData);
      }
      else if (this.auditorType === 'operatingHours') {
        if (objData.id)
          returnData = this.auditService.updatePreauditoperationhours(aid, objData);
        else
          returnData = this.auditService.createPreauditoperationhours(aid, objData);
      }
      else if (this.auditorType === 'area') {
        if (objData.id)
          returnData = this.auditService.updatePreauditarea(aid, objData);
        else
          returnData = this.auditService.createPreauditarea(aid, objData);
      }
      else if (this.auditorType === 'age') {
        if (objData.id)
          returnData = this.auditService.updatePreauditage(aid, objData);
        else
          returnData = this.auditService.createPreauditage(aid, objData);
      }
      else if (this.auditorType === 'hvacMaintainence') {
        if (objData.id)
          returnData = this.auditService.updatePreaudithvacmaintainence(aid, objData);
        else
          returnData = this.auditService.createPreaudithvacmaintainence(aid, objData);
      }
      else if (this.auditorType === 'other') {
        if (objData.id)
          returnData = this.auditService.updatePreauditother(aid, objData);
        else
          returnData = this.auditService.createPreauditother(aid, objData);
      }
      else {
        if (objData.id)
          returnData = this.auditService.updatePreauditgeneralsiteaccessnotes(aid, objData);
        else
          returnData = this.auditService.createPreauditgeneralsiteaccessnotes(aid, objData);
      }

      returnData.subscribe((res: any) => {
        this.toastService.success('Form', 'Successfully saved form input');
      });

    }
    else {
      if (this.formData.id) {
        this.equipmentService.updateEquipmentFormData(this.formData).subscribe((res: any) => {
          this.toastService.success('Form', 'Successfully saved form input');
        });
      }
      else {
        let objData = {
          auditId: this.route.snapshot.params.aid,
          zoneId: this.route.snapshot.params.zid,
          equipmentId: this.equipmentService.equipmentSubTypeData.type.equipment.id,
          typeId: this.equipmentService.equipmentSubTypeData.type.id,
          subTypeId: this.equipmentService.equipmentSubTypeData.id,
          data: this.formData.data
        }
        this.equipmentService.createEquipmentFormData(objData).subscribe((res: any) => {
          this.toastService.success('Form', 'Successfully saved form input');
        });
      }
      // if (this.equipmentType === 'Plugload') {
      //   returnData = this.equipmentService.createPlugLoad(this.equipmentPlugLoad);
      // }
      // else if (this.equipmentType === 'Refrigeration') {
      //   returnData = this.equipmentService.createRefrigenration(this.equipmentRefrigeration);
      // }
      // else if (this.equipmentType === 'Lighting') {
      //   returnData = this.equipmentService.createLighting(this.equipmentLighting);
      // }
      // else if (this.equipmentType === 'WaterHeater') {
      //   returnData = this.equipmentService.createWaterHeater(this.equipmentWaterHating);
      // }
      // else if (this.equipmentType === 'HVAC') {
      //   returnData = this.equipmentService.createHVAC(this.equipmentHVAC);
      // }
      // else {
      //   returnData = this.equipmentService.createMotor(this.equipmentMotors);
      // }

    }

    // this.auditorInfoModel
    // this.saved.emit(this.data);
    this.dirty = false;
  }

  resetEquipmentForm() {
    this.equipmentPlugLoad = new PlugLoad();
    this.equipmentRefrigeration = new Refrigeration();
    this.equipmentLighting = new Lighting();
    this.equipmentWaterHating = new WaterHating();
    this.equipmentHVAC = new HVAC();
    this.equipmentMotors = new Motors();
  }

  restrictAndMergeData(aid: any) {
    let dataObj: any = {};
    if (this.auditorType === 'auditorInfo') {
      if (!this.auditorInfo.preAuditauditorName || !this.auditorInfo.preAuditauditorEmail || !this.auditorInfo.preAuditauditorPhoneNumber)
        return null;

      dataObj = this.auditorInfo;
      dataObj = { ...dataObj, auditId: aid };
      return dataObj;
    }
    else if (this.auditorType === 'generalInfo') {
      if (!this.genralClientInfo.preAuditclientName || !this.genralClientInfo.preAuditauditStartDate)
        return null;

      dataObj = this.genralClientInfo;
      let preAuditauditStartDate = this.datePipe.transform(this.genralClientInfo.preAuditauditStartDate, 'yyyy-MM-dd');
      dataObj = { ...dataObj, preAuditauditStartDate, auditId: Number(aid) };
      let preAuditauditEndDate;
      if (this.genralClientInfo.preAuditauditEndDate) {
        preAuditauditEndDate = this.datePipe.transform(this.genralClientInfo.preAuditauditEndDate, 'yyyy-MM-dd');
        dataObj = { ...dataObj, preAuditauditEndDate };
      }
      else
        delete dataObj.preAuditauditEndDate;

      return dataObj;
    }
    else if (this.auditorType === 'interviwee') {
      dataObj = this.interviewee;
      return dataObj;
    }
    else if (this.auditorType === 'operatingHours') {
      if (!this.operationHours.vacationDays)
        return null;

      dataObj = this.operationHours;
      return dataObj;
    }
    else if (this.auditorType === 'area') {
      if (!this.area.buildingTotalArea || !this.area.buildingConditionedArea)
        return null;

      dataObj = this.area;
      return dataObj;
    }
    else if (this.auditorType === 'age') {
      if (!this.age.yearConstructed)
        return null;

      dataObj = this.age;
      return dataObj;
    }
    else if (this.auditorType === 'hvacMaintainence') {
      dataObj = this.hvacMaintenance;
      return dataObj;
    }
    else if (this.auditorType === 'other') {
      if (!this.others.buildingElectricRateStructure || !this.others.buildingElectricUtilityCompany || !this.others.buildingGasRateStructure || !this.others.buildingGasUtilityCompany)
        return null;

      dataObj = this.others;
      return dataObj;
    }
    else {
      if (!this.generalSiteAccessAndNotes.hvacEquipmentLocation)
        return null;

      dataObj = this.generalSiteAccessAndNotes;
      return dataObj;
    }
  }

  setDirty() {
    this.dirty = true;
  }

  canDeactivate(): boolean {
    return !this.dirty;
  }

  getData(type: any) {
    if (type.nextState) {
      if (type.panelId == 'ngb-panel-0') {
        this.auditorType = 'auditorInfo';
        this.route.params.pipe(
          switchMap(({ aid }) => this.auditService.getAuditorInfo(aid)),
        ).subscribe((res: any[]) => {
          if (res.length) {
            this.auditorInfo = res[0];
          }
        });
      }
      else if (type.panelId == 'ngb-panel-1') {
        this.auditorType = 'generalInfo';
        this.route.params.pipe(
          switchMap(({ aid }) => this.auditService.getGeneralInfo(aid)),
        ).subscribe((res: any[]) => {
          if (res.length) {
            this.genralClientInfo = res[0];
          }
        });
      }
      else if (type.panelId == 'ngb-panel-2') {
        this.auditorType = 'interviwee';
        this.route.params.pipe(
          switchMap(({ aid }) => this.auditService.getPreauditinterviewee(aid)),
        ).subscribe((res: any[]) => {
          if (res.length) {
            this.interviewee = res[0];
          }
        });
      }
      else if (type.panelId == 'ngb-panel-3') {
        this.auditorType = 'operatingHours';
        this.route.params.pipe(
          switchMap(({ aid }) => this.auditService.getPreauditoperationhours(aid)),
        ).subscribe((res: any[]) => {
          if (res.length) {
            this.operationHours = res[0];
          }
        });
      }
      else if (type.panelId == 'ngb-panel-4') {
        this.auditorType = 'area';
        this.route.params.pipe(
          switchMap(({ aid }) => this.auditService.getPreauditarea(aid)),
        ).subscribe((res: any[]) => {
          if (res.length) {
            this.area = res[0];
          }
        });
      }
      else if (type.panelId == 'ngb-panel-5') {
        this.auditorType = 'age';
        this.route.params.pipe(
          switchMap(({ aid }) => this.auditService.getPreauditage(aid)),
        ).subscribe((res: any[]) => {
          if (res.length) {
            this.age = res[0];
          }
        });
      }
      else if (type.panelId == 'ngb-panel-6') {
        this.auditorType = 'hvacMaintainence';
        this.route.params.pipe(
          switchMap(({ aid }) => this.auditService.getPreaudithvacmaintainence(aid)),
        ).subscribe((res: any[]) => {
          if (res.length) {
            this.hvacMaintenance = res[0];
          }
        });
      }
      else if (type.panelId == 'ngb-panel-7') {
        this.auditorType = 'other';
        this.route.params.pipe(
          switchMap(({ aid }) => this.auditService.getPreauditother(aid)),
        ).subscribe((res: any[]) => {
          if (res.length) {
            this.others = res[0];
          }
        });
      }
      else if (type.panelId == 'ngb-panel-8') {
        this.auditorType = 'generalSiteAccessNotes';
        this.route.params.pipe(
          switchMap(({ aid }) => this.auditService.getPreauditgeneralsiteaccessnotes(aid)),
        ).subscribe((res: any[]) => {
          if (res.length) {
            this.generalSiteAccessAndNotes = res[0];
          }
        });
      }
    }
  }

}
