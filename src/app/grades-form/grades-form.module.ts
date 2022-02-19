import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GradesFormComponent } from './grades-form.component';

@NgModule({
  imports: [ CommonModule, FormsModule,ReactiveFormsModule, IonicModule,],
  declarations: [GradesFormComponent],
  exports: [GradesFormComponent]
})
export class GradesFormComponentModule {}
