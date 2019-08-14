import { Component, OnInit } from '@angular/core';
import { Credenciales, UsuarioService } from '../../services/usuario.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil-user',
  templateUrl: './perfil-user.page.html',
  styleUrls: ['./perfil-user.page.scss'],
})
export class PerfilUserPage implements OnInit {

  user: Credenciales = {};

  constructor(
    public UsuarioProv: UsuarioService,
    private afAuth: AngularFireAuth,
    public navCtrl: NavController
  ) { 
    this.user = this.UsuarioProv.usuario;

    this.afAuth.authState.subscribe(user => {
      console.log('AFAUTH' + JSON.stringify(user));
    });
   }

  ngOnInit() {
  }

  salir(){
    this.afAuth.auth.signOut().then(res => {
      this.UsuarioProv.usuario = {};
      this.navCtrl.navigateRoot('/login');
    });
  }

}
