import { Component, OnInit } from '@angular/core';
// import { NavController } from 'ionic-angular';

import { AngularFireAuth } from '@angular/fire/auth';

import * as firebase from 'firebase/app';

import { auth } from 'firebase/app';
// import {auth} from '@firebase/app';
import { NavController, AlertController } from '@ionic/angular';
import { UsuarioService, Credenciales } from '../../services/usuario.service';

import {AngularFirestoreDocument, AngularFirestore} from '@angular/fire/firestore';
import {Observable, of} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  constructor(

    private afAuth: AngularFireAuth,
    public usuarioProv: UsuarioService,
    private navCtrl: NavController,
    private afs: AngularFirestore
  ) {}


  signInWithFacebook() {
      this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => {
        console.log(res);

        const user = res.user;

          this.usuarioProv.cargarUsuario(
            user.displayName,
            user.email,
            user.photoURL,
            user.uid,
            'Facebook'
          );
        
        let Datauser = this.usuarioProv.usuario;
        this.afs.doc(`user/${res.user.uid}`).set(JSON.parse(JSON.stringify(Datauser)));
        this.navCtrl.navigateRoot('/rol');
      });
  }

  signInWithGoogle(){
    this.afAuth.auth
    .signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(res => {console.log( res);
  
      let user = res.user;

      this.usuarioProv.cargarUsuario(
        user.displayName,
        user.email,
        user.photoURL,
        user.uid,
        'Google'
      );
      
      let Datauser = this.usuarioProv.usuario;
      this.afs.doc(`user/${res.user.uid}`).set(JSON.parse(JSON.stringify(Datauser)));
      this.navCtrl.navigateRoot('/rol');
    });
  }

  ngOnInit() {

  }

  ngOnInit() {}
}
