import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GradesFormComponent } from './grades-form.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule,],
  declarations: [GradesFormComponent],
  exports: [GradesFormComponent]
})
export class GradesFormComponentModule {}
