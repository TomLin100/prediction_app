import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ResultListComponentModule } from '../result-list/result-list.module';
import { GradesFormComponentModule } from '../grades-form/grades-form.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultListComponentModule,
    GradesFormComponentModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
