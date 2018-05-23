import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
//Calendar Module
import { NgCalendarModule  } from 'ionic2-calendar';
import { WochenplanPage } from './wochenplan';

@NgModule({
  declarations: [
    WochenplanPage,
  ],
  imports: [
    IonicPageModule.forChild(WochenplanPage),
    TranslateModule.forChild(),
    NgCalendarModule
  ],
  exports: [
    WochenplanPage
  ]
})
export class WochenplanPageModule {}
