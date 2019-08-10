import { Component, OnInit } from '@angular/core';
import { UsuarioService, Credenciales } from '../../services/usuario.service';

import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.page.html',
  styleUrls: ['./rol.page.scss'],
})
export class RolPage implements OnInit {

  user: Credenciales = {};

  constructor(public usuarioProv: UsuarioService,
              private afAuth: AngularFireAuth,
              public navCtrl: NavController
            ) {

    console.log(this.usuarioProv.usuario);

    this.user = this.usuarioProv.usuario;

    this.afAuth.authState.subscribe(user => {
      console.log('AFAUTH' + JSON.stringify(user));
    });

   }

   salir(){
     this.afAuth.auth.signOut().then(res => {
       this.usuarioProv.usuario = {};
       this.navCtrl.navigateRoot('/login');
     });
   }

  ngOnInit() {
  }

}
