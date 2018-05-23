import { Component, ViewChild } from '@angular/core'; 
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
// import * as moment from 'moment';

import { Termine } from '../../providers/termine/termine';

@IonicPage( { name: 'TerminCreatePage' } )
@Component({
  selector: 'page-termin-create',
  templateUrl: 'termin-create.html',
})
export class TerminCreatePage {
  @ViewChild('fileInput') fileInput;
  
  currentDate = new Date();

  startZeit: any;
  endZeit: any;

  event = { startTime: this.currentDate, endTime: this.currentDate, allDay: false, title: '', about: '', day: this.currentDate.getDay(), weekly: false };

  constructor(public navCtrl: NavController,public params: NavParams, public viewCtrl: ViewController,  public terminService: Termine) {
    this.terminService = params.get('terminService');
  }

  ionViewDidLoad() { 
    this.currentDate = new Date(this.params.get('selectedDay'));


    this.startZeit = this.currentDate.toISOString();
    this.currentDate.setHours(this.currentDate.getHours() + 2);
    this.endZeit = this.currentDate.toISOString();


    this.event.day = this.currentDate.getDay();
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  save() {
    // //BUGFIX
    this.event.startTime = new Date(this.startZeit);
    this.event.startTime.setHours(this.event.startTime.getHours()-2);
    this.event.endTime = new Date(this.endZeit);
    this.event.endTime.setHours(this.event.endTime.getHours()-2);
    
    
    this.terminService.createTermin(this.event);
    this.viewCtrl.dismiss();
    // this.viewCtrl.dismiss(this.event);
  }



}