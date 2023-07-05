import { NgModule } from "@angular/core";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  exports: [
    MatGridListModule,
    MatCardModule,
    MatTabsModule
  ]
})

export class MaterialModule { }