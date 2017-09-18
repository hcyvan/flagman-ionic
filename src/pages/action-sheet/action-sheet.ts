import { Component } from '@angular/core';
import { IonicPage, ActionSheetController, AlertController, Platform } from 'ionic-angular';

/**
 * Generated class for the ActionSheetPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-action-sheet',
  templateUrl: 'action-sheet.html',
})
export class ActionSheetPage {

  constructor(
    public actionSheetController: ActionSheetController,
    public alertController: AlertController,
    public platform: Platform
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionSheetPage');
  }

  openAlert() {
    let alert = this.alertController.create();
    alert.setTitle('Which planets have you visited?');
    alert.addInput({
      type: 'checkbox',
      label: 'Alderaan1',
      value: 'value1',
      checked: true
    })
    alert.addInput({
      type: 'checkbox',
      label: 'Alderaan2',
      value: 'value2',
      checked: true
    })

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        console.log('Checkbox data:', data);
      }
    });
    alert.present();
  }

  openActionSheet() {
      let actionSheet = this.actionSheetController.create({
        title: 'Albums',
        buttons: [
          {
            text: 'Destructive',
            role: 'destructive',
            icon: !this.platform.is('ios') ? 'trash' : null,
            handler: () => {
              console.log('Destructive clicked');
            }
          },{
            text: 'Archive',
            handler: () => {
              console.log('Archive clicked');
            }
          },{
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      })
    actionSheet.present();
  }

}
