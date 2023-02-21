import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { MasterDetailComponent } from './components/master-detail/master-detail.component';
import { OptionDropdownComponent } from './components/option-dropdown/option-dropdown.component';
import { SafePipe } from './safe.pipe';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    MasterDetailComponent,
    OptionDropdownComponent,
    PageNotFoundComponent,
    NavBarComponent,
    SafePipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbDropdownModule,
    NgbCollapseModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    MasterDetailComponent,
    OptionDropdownComponent,
    PageNotFoundComponent,
    NavBarComponent,
    SafePipe,
  ],
  providers: [DatePipe]
})
export class SharedModule {
}
