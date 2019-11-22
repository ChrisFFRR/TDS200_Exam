import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';
import {canActivate, redirectUnauthorizedTo} from '@angular/fire/auth-guard';

const routes: Routes = [

  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule),

      },
      {path: 'add', loadChildren: '../add-office/add-office.module#AddOfficePageModule'}
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    ...canActivate(redirectUnauthorizedTo(['login']))
  }
];














  /*{
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'add',
        loadChildren: '../add-office/add-office.module#AddOfficePageModule'
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule),
        ...canActivate(redirectUnauthorizedTo(['login']))
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
        ...canActivate(redirectLoggedInTo(['home']))
      }
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    ...canActivate(redirectLoggedInTo(['home']))
  }
];*/

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsRoutingModule { }
