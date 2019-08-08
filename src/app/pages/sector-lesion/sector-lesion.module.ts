import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SectorLesionPage } from './sector-lesion.page';

const routes: Routes = [
  {
    path: '',
    component: SectorLesionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SectorLesionPage]
})
export class SectorLesionPageModule {}
