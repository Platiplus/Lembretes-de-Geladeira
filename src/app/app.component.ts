import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


interface Lembrete {
  author: string;
  content: string;
}

interface LembreteID extends Lembrete {
  id: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  lembCol: AngularFirestoreCollection<Lembrete>;
  lembretes: any;

  author: String;
  content: String;

  lembreteDoc: AngularFirestoreDocument<Lembrete>;
  lembrete: Observable<Lembrete>;

  constructor(private afs: AngularFirestore){

  }

  ngOnInit(){
    this.lembCol = this.afs.collection('lembrete');
    this.lembretes = this.lembCol.snapshotChanges()
      .map(actions => {
        return actions.map(obj => {
          const data = obj.payload.doc.data() as Lembrete;
          const id = obj.payload.doc.id;
          return {id, data};
        })
      })
  }

  addLembrete(){
    this.afs.collection('lembrete').add({'author':this.author, 'content':this.content});
  }

  getLembrete(lembreteId){
    this.lembreteDoc = this.afs.doc('lembrete/'+lembreteId);
    this.lembrete = this.lembreteDoc.valueChanges();
  }

  deleteLembrete(lembreteId){
    this.afs.doc('lembrete/'+lembreteId).delete();
  }

}
