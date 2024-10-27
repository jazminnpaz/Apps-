import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniciodesesionPageRoutingModule } from './iniciodesesion-routing.module';

import { IniciodesesionPage } from './iniciodesesion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniciodesesionPageRoutingModule
  ],
  declarations: [IniciodesesionPage]
})
export class IniciodesesionPageModule {}
