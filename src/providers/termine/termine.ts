import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';
 
@Injectable()
export class Termine {
 
  data: any;
  db: any;
  remote: any;

  changes = 2;
 
  // options = {
  //   live: true,
  //   retry: true,
  //   continuous: true
  // };

  constructor() {
 
    this.db = new PouchDB('termine');
 
    this.remote = 'http://localhost:5984/termine';
 
    let options = {
      live: true,
      retry: true,
      continuous: true
    };
 
    this.db.sync(this.remote, options);
 
  }
 
  getTermine() {
    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.db.allDocs({
        include_docs: true
      }).then((result) => {
        this.data = [];
   
        let docs = result.rows.map((row) => {
          this.data.push(row.doc);
        });
        resolve(this.data);
        this.db.changes({live: true, since: 'now', include_docs: true}).on('change', (change) => {
          
          this.changes++;
          console.log(this.changes);
          this.handleChange(change);
          console.log(113);
          console.log(this.changes);
          

        });
      }).catch((error) => {
        console.log(error);
      });
    });
  }
 
  createTermin(termin){
    this.db.post(termin);
  }
   
  updateTermin(termin){
    this.db.put(termin).catch((err) => {
      console.log(err);
    });
  }
   
  deleteTermin(termin){
    this.db.remove(termin).catch((err) => {
      console.log(err);
    });
  }
 
  handleChange(change){
    let changedDoc = null;
    let changedIndex = null;
   
    this.data.forEach((doc, index) => {
      if(doc._id === change.id){
        changedDoc = doc;
        changedIndex = index;
      }
    });
    //A document was deleted
    if(change.deleted){
      if (this.changes > 1){
        this.data.splice(changedIndex, 1);
        this.changes = 0;
      }
    }
    else {
      //A document was updated
      if(changedDoc){
        this.data[changedIndex] = change.doc;
      }
      //A document was added
      else {
        this.data.push(change.doc);
      }
    }
  }
}