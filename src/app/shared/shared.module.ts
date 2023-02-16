import {CommonModule, DatePipe} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {MasterDetailComponent} from './components/master-detail/master-detail.component';
import { OptionDropdownComponent } from './components/option-dropdown/option-dropdown.component';
import {SafePipe} from './safe.pipe';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MasterDetailComponent,
    OptionDropdownComponent,
    PageNotFoundComponent,
    SafePipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
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
