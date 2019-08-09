import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { TabsComponent } from './tabs/tabs.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    TabsComponent
  ]
  ,
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    TabsComponent
  ]
})
export class ComponentsModule { }
