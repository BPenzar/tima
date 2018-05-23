import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { TerminDetailPage } from './termin-detail';

@NgModule({
  declarations: [
    TerminDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(TerminDetailPage),
    TranslateModule.forChild()
  ],
  exports: [
    TerminDetailPage
  ]
})
export class TerminDetailPageModule {}


