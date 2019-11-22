import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import {OfficeCardItemComponent} from '../components/office-card-item/office-card-item.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
      }
    ])
  ],
  exports: [
  ],
  declarations: [ HomePage, OfficeCardItemComponent]
})
export class HomePageModule {}
