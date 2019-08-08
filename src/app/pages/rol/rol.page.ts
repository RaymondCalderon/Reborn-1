import { Component, OnInit } from '@angular/core';
import { UsuarioService, Credenciales } from '../../services/usuario.service';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.page.html',
  styleUrls: ['./rol.page.scss'],
})
export class RolPage implements OnInit {

  user: Credenciales = {};

  constructor(public usuarioProv: UsuarioService) {

    console.log(this.usuarioProv.usuario);

    this.user = this.usuarioProv.usuario;

   }

  ngOnInit() {
  }

}
