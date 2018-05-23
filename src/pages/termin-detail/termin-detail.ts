import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { Termine } from '../../providers/termine/termine';

@IonicPage( { name: 'TerminDetailPage' } )
@Component({
  selector: 'page-termin-detail',
  templateUrl: 'termin-detail.html',
})
export class TerminDetailPage {
  @ViewChild('fileInput') fileInput;

  event: any;
  tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds

  backupEvent = { startTime: new Date().toISOString(), endTime: new Date().toISOString(), allDay: false, title: [''], about: [''], day: ['0'], weekly: false };

  constructor(public navCtrl: NavController,public params: NavParams, public viewCtrl: ViewController, public terminService: Termine) { 
    this.event = params.get('termin');
    this.terminService = params.get('terminService');

  }

  ionViewDidLoad() {
    this.event.startTime = (new Date(this.event.startTime - this.tzoffset)).toISOString().slice(0, -1);
    this.event.endTime = (new Date(this.event.endTime - this.tzoffset)).toISOString().slice(0, -1);

    this.backupEvent.startTime = this.event.startTime;
    this.backupEvent.endTime= this.event.endTime;
    this.backupEvent.allDay = this.event.allDay;
    this.backupEvent.title = this.event.title;
    this.backupEvent.about = this.event.about;
    this.backupEvent.day = this.event.day;
    this.backupEvent.weekly = this.event.weekly;
  }

  cancel() {
    this.event.startTime = this.backupEvent.startTime;
    this.event.endTime = this.backupEvent.endTime;
    this.event.allDay = this.backupEvent.allDay ;
    this.event.title = this.backupEvent.title;
    this.event.about = this.backupEvent.about;
    this.event.day = this.backupEvent.day;
    this.event.weekly = this.backupEvent.weekly;
    // // //BUGFIX
    let eventData = this.event;    
    eventData.startTime = new Date(this.event.startTime);
    eventData.endTime = new Date(this.event.endTime);
    eventData.startTime.setHours(eventData.startTime.getHours() - 2) ;
    eventData.endTime.setHours(eventData.endTime.getHours() - 2) ;
    this.event = eventData;
    // // -----------------------
    this.viewCtrl.dismiss();
  }

  delete() {
    this.terminService.deleteTermin(this.event);
    this.viewCtrl.dismiss();

  }

  save() {
    let eventData = this.event;    
    eventData.startTime = new Date(this.event.startTime);
    eventData.endTime = new Date(this.event.endTime);
    eventData.startTime.setHours(eventData.startTime.getHours() - 2) ;
    eventData.endTime.setHours(eventData.endTime.getHours() - 2) ;
    this.event = eventData;
    
    this.terminService.createTermin(this.event);
    this.viewCtrl.dismiss();
  }
}