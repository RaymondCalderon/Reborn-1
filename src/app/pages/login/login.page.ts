import { Component, OnInit } from '@angular/core';
// import { NavController } from 'ionic-angular';

import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { NavController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    // public navCtrl: NavController, 
    private afAuth: AngularFireAuth,
    public usuarioProv: UsuarioService,
    private navCtrl: NavController,
  ) { }

  signInWithFacebook() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => {console.log(res);

        let user = res.user;

        this.usuarioProv.cargarUsuario(
          user.displayName,
          user.email,
          user.photoURL,
          user.uid,
          'facebook'
        );
        this.navCtrl.navigateRoot('/rol');
        console.log("ola"+ user);
      });


      // var user = res.user;

  }

  ngOnInit() {
  }

}
