import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import {AlertController} from '@ionic/angular';
import {Router} from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username: string = ""
  password: string = ""
  copyPassword: string = ""

  constructor(
    public afAuth: AngularFireAuth,
    public alert: AlertController,
    public router: Router,
    private afs: AngularFirestore

  ) { }

  ngOnInit() {
  }

  async register(){
    const {username, password, copyPassword} = this
    if(password != copyPassword){
      this.showAlert("¡Error!", "las contraseñas no coinciden")
      return console.error("Contraseña incorrecta")
    }
    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username, password)
      console.log(res)
      // this.afs.doc(`user/${res.user.uid}`).set(JSON.parse(JSON.stringify(username, password)))
      this.showAlert("Bienvenido/a", "¡Registro Exitoso!")
      this.router.navigate(['/login'])
    }catch(error){
      console.dir(error)
      this.showAlert("Error", error.message)
    }
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["OK"]
    })
    await alert.present()
    
  }

}
