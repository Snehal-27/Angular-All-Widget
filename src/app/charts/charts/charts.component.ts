import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  chartList: Array<any> = [
    {"id":1,"name":"Bar Chart"},
    {"id":2,"name":"Line Chart"},
    {"id":3,"name":"Pie Chart"},
    {"id":4,"name":"Doughnut Chart"},
    {"id":5,"name":"Radar Chart"},
    {"id":6,"name":"Polar-Area Chart"},
    {"id":7,"name":"Bubble Chart"},
    {"id":8,"name":"Scatter Chart"},

  ]
}
