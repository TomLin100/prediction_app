import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultListComponent } from './result-list.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule,],
  declarations: [ResultListComponent],
  exports: [ResultListComponent]
})
export class ResultListComponentModule {}
