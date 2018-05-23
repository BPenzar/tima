import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

import { Items } from '../../providers/items/items';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  item: any;
  pufferAbout: any;

  constructor(public navCtrl: NavController, navParams: NavParams, public viewCtrl: ViewController, items: Items) {
    this.item = navParams.get('item');
    
  }

  ionViewDidLoad(){
    this.pufferAbout = this.item.about;
  }

  cancel() {
    this.item.about = this.pufferAbout;
    this.viewCtrl.dismiss();
  }


  done() {
    this.viewCtrl.dismiss(this.item);
  }

}
