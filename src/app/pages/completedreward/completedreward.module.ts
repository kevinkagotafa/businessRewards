import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompletedrewardPageRoutingModule } from './completedreward-routing.module';

import { CompletedrewardPage } from './completedreward.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompletedrewardPageRoutingModule
  ],
  declarations: [CompletedrewardPage]
})
export class CompletedrewardPageModule {}
