import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {LarsComponent} from './lars/lars.component';
import {SilvanComponent} from './silvan/silvan.component';
import {YouriComponent} from './youri/youri.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'lars',
    component: LarsComponent
  },
  {
    path: 'silvan',
    component: SilvanComponent
  },
  {
    path: 'youri',
    component: YouriComponent
  },
  {
    path: '**',
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
