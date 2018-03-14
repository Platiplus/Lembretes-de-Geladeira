import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAkVJPc2ITILqxIcsiw-sm3gyNaHJhP0sg",
    authDomain: "geladeira-bed71.firebaseapp.com",
    databaseURL: "https://geladeira-bed71.firebaseio.com",
    projectId: "geladeira-bed71",
    storageBucket: "",
    messagingSenderId: "842101763955"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
