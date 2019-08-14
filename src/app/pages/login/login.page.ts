import { Component, OnInit } from "@angular/core";
// import { NavController } from 'ionic-angular';

import { AngularFireAuth } from "@angular/fire/auth";

import * as firebase from "firebase/app";

import { auth } from "firebase/app";
// import {auth} from '@firebase/app';
import { NavController, AlertController } from "@ionic/angular";
import { UsuarioService, Credenciales } from "../../services/usuario.service";

import {
  AngularFirestoreDocument,
  AngularFirestore
} from "@angular/fire/firestore";
import { Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  username: string = "";
  password: string = "";

  constructor(
    private afAuth: AngularFireAuth,
    public usuarioProv: UsuarioService,
    private navCtrl: NavController,
    private afs: AngularFirestore,
    public alert: AlertController
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
          "Facebook"
        );

        let Datauser = this.usuarioProv.usuario;
        this.afs
          .doc(`user/${res.user.uid}`)
          .set(JSON.parse(JSON.stringify(Datauser)));
        this.navCtrl.navigateRoot("/home");
      });
  }

  signInWithGoogle() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(res => {
        console.log(res);

        let user = res.user;

        this.usuarioProv.cargarUsuario(
          user.displayName,
          user.email,
          user.photoURL,
          user.uid,
          "Google"
        );

        let Datauser = this.usuarioProv.usuario;
        this.afs
          .doc(`user/${res.user.uid}`)
          .set(JSON.parse(JSON.stringify(Datauser)));
        this.navCtrl.navigateRoot("/home");
      });
  }

  async login() {
    const { username, password } = this;
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(
        username,
        password
      );
      this.showAlert("Success!", "Bienvenido/a!");
      this.navCtrl.navigateRoot("/home");
    } catch (err) {
      console.dir(err);

      if (err.code === "auth/user-not-found") {
        // console.log("El usuario no existe")
        // this.showAlert("Error", err.message)
      }
      this.showAlert("Error", err.message);
    }
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["OK"]
    });
    await alert.present();
  }

  ngOnInit() {}
}
