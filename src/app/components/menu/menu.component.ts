import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  public appPage = [
    {
      titulo: 'Inicio',
      url: '',
      icono: 'home'
    },
    {
      titulo: 'Terapias',
      url: 'tab-terapias',
      icono: 'hand'
    },
    {
      titulo: 'Graficas',
      url: 'tab-graficas',
      icono: 'stats'
    },
    {
      titulo: 'Perfil Especialista',
      url: 'perfil-medico',
      icono: 'hand'
    }
  ];
  constructor() { }

  ngOnInit() {}

}
