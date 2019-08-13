import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { LoginPage } from './pages/login/login.page';
// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { ComponentsModule } from './components/components.module';

export const firebaseConfig = {
  apiKey: 'AIzaSyDcurmjOtRoXaIdx-vgAjQspFR5QYXl9io',
  authDomain: 'reborn-6ff1a.firebaseapp.com',
  databaseURL: 'https://reborn-6ff1a.firebaseio.com',
  projectId: 'reborn-6ff1a',
  storageBucket: 'reborn-6ff1a.appspot.com',
  messagingSenderId: '964798570490',
  appId: '1:964798570490:web:54145ecf009ea905'
};

@NgModule({

  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ComponentsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFirestore,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]


})
export class AppModule {}
