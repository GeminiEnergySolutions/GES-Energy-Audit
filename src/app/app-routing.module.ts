import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'audits', loadChildren: () => import('./audit/audit.module').then(m => m.AuditModule)},
  // {path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    paramsInheritanceStrategy: 'always',
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
