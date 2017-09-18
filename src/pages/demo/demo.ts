import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {variable} from "@angular/compiler/src/output/output_ast";

declare var BMap: any;
declare var BMAP_STATUS_SUCCESS: any;
declare var Point: any;

@IonicPage()
@Component({
  selector: 'page-demo',
  templateUrl: 'demo.html',
})
export class DemoPage {
  map: any;
  point: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  getCurrentPosition() {
    let geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function (r) {
      if(this.getStatus() == BMAP_STATUS_SUCCESS){
          console.log(r.point)
        // TODO: something
      } else {
        // TODO: something
      }
    })
  }

  ionViewDidLoad() {
      this.map = new BMap.Map("container");
      let point = new BMap.Point(...this.getPoints(2));
      this.map.centerAndZoom(point, 15);
      let marker = new BMap.Marker(point);
      this.add_overlay(marker);

      this.initPoints()

      this.map.addEventListener("click",(e) => {
        this.point = e.point;
        let marker = new BMap.Marker(e.point);
        marker.addEventListener('click', () => {
          // console.log(marker.getPosition());
          this.toFlag(this.point);
        })
        this.add_overlay(marker);
      });
  }


  add_overlay(marker){
    this.map.addOverlay(marker);
  }
  remove_overlay(){
    this.map.clearOverlays();
  }

  addMarkerByXY(x, y) {
      let point = new BMap.Point(x, y);
      let marker = new BMap.Marker(point);
      marker.addEventListener('click', ()=>{
        // console.log(marker.getPosition());
        this.toFlag(point);
      })
      this.add_overlay(marker)
  }


  initPoints() {
     const points = this.getPoints()
      for(let point of points) {
        this.addMarkerByXY(point[0], point[1]);
      }
  }


  getPoints(index = null) {
    let points = [
      [121.487576, 31.257003],
      [121.489229, 31.253422],
      [121.479887, 31.248544],
      [121.494331, 31.250335],
      [121.481539, 31.2562],
      [121.485348, 31.254842],
    ]
    if(index) {
      return points[index]
    } else {
      return points
    }
  }

  toFlag(point) {
    this.navCtrl.push('FlagPage', {point: point})
  }
  login() {
    this.navCtrl.push('LoginPage')
  }
}
