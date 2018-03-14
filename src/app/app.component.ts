import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


interface Lembrete {
  author: string;
  content: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  lembCol: AngularFirestoreCollection<Lembrete>;
  lembretes: Observable<Lembrete[]>;

  author: String;
  content: String;

  constructor(private afs: AngularFirestore){

  }

  ngOnInit(){
    this.lembCol = this.afs.collection('lembrete');
    this.lembretes = this.lembCol.valueChanges();
  }

  addLembrete(){
    this.afs.collection('lembrete').add({'author':this.author, 'content':this.content});
  }

}
