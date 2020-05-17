import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule, MatToolbarModule, MatFormFieldModule, MatSelectModule } from '@angular/material';

@NgModule({
  exports: [
    MatToolbarModule, 
    MatFormFieldModule, 
    MatSelectModule,
    MatCardModule
  ],
  declarations: [ ]
})
export class SharedModule { }