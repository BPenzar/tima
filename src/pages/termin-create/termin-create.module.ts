import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { TerminCreatePage } from './termin-create';

@NgModule({
  declarations: [
    TerminCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(TerminCreatePage),
    TranslateModule.forChild()
  ],
  exports: [
    TerminCreatePage
  ]
})
export class TerminCreatePageModule {}
