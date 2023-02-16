import {CommonModule, DatePipe} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {MasterDetailComponent} from './components/master-detail/master-detail.component';
import { OptionDropdownComponent } from './components/option-dropdown/option-dropdown.component';
import {SafePipe} from './safe.pipe';


@NgModule({
  declarations: [
    MasterDetailComponent,
    OptionDropdownComponent,
    SafePipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbDropdownModule,
  ],
  exports: [
    MasterDetailComponent,
    OptionDropdownComponent,
    SafePipe,
  ],
  providers: [DatePipe]
})
export class SharedModule {
}
