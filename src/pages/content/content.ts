import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, AlertController } from 'ionic-angular';

import { Items } from '../../providers/items/items';


@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})
export class ContentPage {
  todos: any;
 
  constructor(public navCtrl: NavController, public todoService: Items, public modalCtrl: ModalController, public alertCtrl: AlertController) {
  }
  
  ionViewDidLoad(){
    this.todoService.getTodos().then((data) => {
      this.todos = data;
    });
  }
  
  createTodo(){
    let addModal = this.modalCtrl.create('ItemCreatePage', {zeitraum: 'w'});
    addModal.onDidDismiss(item => {
      if (item) {
        this.todoService.createTodo(item);
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
      }
      // this.todoService.getTodos().then((data) => {
      //   this.todos = data;
      // });
    })
    addModal.present();
  }

  updateTodo(todo){
    let addModal = this.modalCtrl.create('ItemDetailPage', {item: todo});
    addModal.onDidDismiss(todo => {
      if (todo) {
        this.todoService.updateTodo(todo);
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
      } 
    })
    addModal.present();
  }

  switchToDo(todo) {
    if (todo.zeitraum == 'w'){
      todo.zeitraum = 't';
      this.todoService.updateTodo(todo);
      this.navCtrl.setRoot(this.navCtrl.getActive().component);
    }
    else if (todo.zeitraum = 't'){
      todo.zeitraum = 'w';
      this.todoService.updateTodo(todo);
      this.navCtrl.setRoot(this.navCtrl.getActive().component);
    }
  }

  deleteTodo(todo){
    this.todoService.deleteTodo(todo);
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }
}
