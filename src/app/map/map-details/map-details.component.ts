import { Component, OnInit, ViewChild } from '@angular/core';
import { google } from "google-maps";

@Component({
  selector: 'app-map-details',
  templateUrl: './map-details.component.html',
  styleUrls: ['./map-details.component.css']
})
export class MapDetailsComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  latitude: number;
  longitude: number;
  google: google;


  constructor() { }

  ngOnInit() {
    var mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.HYBRID
    };
    var mapOptions = {
      panControl: true,
      zoomControl: true,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE
    },
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.TOP_CENTER
      },
      scaleControl: true,
      streetViewControl: true,
      overviewMapControl: true,
      rotateControl: true
      
    }
    
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(document.getElementById('roadmap'));
    this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(document.getElementById('terrain'));
    this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(document.getElementById('satellite'));


  }


  setMapType(mapTypeId: string) {
    this.map.setMapTypeId(mapTypeId)
  }


  setCenter(e: any) {
    e.preventDefault();
    this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));
  }
}


