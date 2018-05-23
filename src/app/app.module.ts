import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Camera } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
// import { IonicStorageModule, Storage } from '@ionic/storage';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

// import { Settings, User, Api } from '../providers';
import { Items } from '../providers/items/items';
import { Termine } from '../providers/termine/termine';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// export function provideSettings(storage: Storage) {
  
//   /**
//    * The Settings provider takes a set of default settings for your app.
//    * You can add new settings options at any time. Once the settings are saved,
//    * these values will not overwrite the saved values (this can be done manually if desired).
//    */
//   return new Settings(storage, {
//     option1: true,
//     option2: 'Ionitron J. Framework',
//     option3: '3',
//     option4: 'Hello'
//   });
// }


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    // NgCalendarModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    // IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    // Api,
    Items,
    // User,
    Camera,
    SplashScreen,
    StatusBar,
    // { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Termine
  ]
})
export class AppModule { }
