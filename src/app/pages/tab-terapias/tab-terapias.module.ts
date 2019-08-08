import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabTerapiasPage } from './tab-terapias.page';

const routes: Routes = [
  {
    path: '',
    component: TabTerapiasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabTerapiasPage]
})
export class TabTerapiasPageModule {}
