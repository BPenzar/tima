import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

//Calendar Module
import { NgCalendarModule  } from 'ionic2-calendar';

import { TagesplanPage } from './tagesplan';

@NgModule({
  declarations: [
    TagesplanPage,
  ],
  imports: [
    IonicPageModule.forChild(TagesplanPage),
    TranslateModule.forChild(),
    NgCalendarModule
  ],
  exports: [
    TagesplanPage
  ]
})
export class TagesplanPageModule {}

