import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { NgCalendarModule  } from 'ionic2-calendar';

import { ContentPage } from './content';

@NgModule({
  declarations: [
    ContentPage,
  ],
  imports: [
    IonicPageModule.forChild(ContentPage),
    NgCalendarModule,
    TranslateModule.forChild()
  ],
  exports: [
    ContentPage
  ]
})
export class ContentPageModule { }

