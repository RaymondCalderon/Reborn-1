import { Component, OnInit, Input } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Credenciales, UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  photoUser: Credenciales = {};

@Input()titulo: string;
  constructor(
    private menuCtrl: MenuController,
    public usuarioProv: UsuarioService) { 
      
    this.photoUser = this.usuarioProv.usuario;
  }

  ngOnInit() {}

  MostrarMenu() {
    this.menuCtrl.toggle();
  }

}
