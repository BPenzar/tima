import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  ModalController} from 'ionic-angular';

import { Termine } from '../../providers/termine/termine';

@IonicPage( { name: 'WochenplanPage' } ) 
@Component({
  selector: 'page-wochenplan',
  templateUrl: 'wochenplan.html',
})
export class WochenplanPage {
  termine: any;
  public today: string;
  viewTitle: string;
  selectedDay = new Date();

  calendar = {
    queryMode: 'remote',
    mode: 'week',
    currentDate: new Date()
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,public terminService: Termine, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    let wdays = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
    this.today = wdays[this.selectedDay.getDay()];

    this.terminService.getTermine().then((data) => {
      data.forEach((doc, index) => {

        doc.startTime = new Date(doc.startTime);
        doc.endTime = new Date(doc.endTime);       

        //Wöchentliche Termine verschieben -- in folgende Woche
        if (doc.weekly){
          while(doc.startTime.getDate() < new Date().getDate()){
            doc.startTime.setDate(doc.startTime.getDate() + 7);
            doc.endTime.setDate(doc.endTime.getDate() + 7);
          
            //Auch in Datenbank aktualisieren (nicht nötig, aber doch schöner)
            this.terminService.updateTermin(doc);
          }
        }

      });
      this.termine = data;
    });
  }
  
  onRangeChanged = (ev) => {
    this.terminService.getTermine().then((data) => {
      data.forEach((doc, index) => {
        doc.startTime = new Date(doc.startTime);
        doc.endTime = new Date(doc.endTime);

        //Wöchentliche Termine verschieben -- in folgende Woche
        if (doc.weekly){
          while(doc.startTime.getDate() < new Date().getDate()){

            doc.startTime.setDate(doc.startTime.getDate() + 7);
            doc.endTime.setDate(doc.endTime.getDate() + 7);
          
            //Auch in Datenbank aktualisieren (nicht nötig, aber doch schöner)
            this.terminService.updateTermin(doc);
          }
        }

      });
      this.termine = [];
      setTimeout(() => {
        this.termine = data;
      });
    });
  };

  addEvent() {
    let modal = this.modalCtrl.create('TerminCreatePage', {terminService: this.terminService, selectedDay: this.selectedDay});
    modal.onDidDismiss(data => {
      this.onRangeChanged(data);
    });
    modal.present(); 
  }

  onEventSelected(termin) {
    let addModal = this.modalCtrl.create('TerminDetailPage', {termin: termin, terminService: this.terminService}) ;
    addModal.onDidDismiss(termin => {
      this.onRangeChanged(termin);
    });
    addModal.present();
  }


  onViewTitleChanged(title) {
    this.viewTitle = title;
    let wdays = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
    this.today = wdays[new Date(this.viewTitle).getDay()];
  }

  onTimeSelected(ev) {
    this.selectedDay = new Date(ev.selectedTime);
    this.selectedDay.setHours(12,0);
    if (ev.events !== undefined && ev.events.length !== 0){
    }
    else {
      this.addEvent();
    }    
  }

  
}