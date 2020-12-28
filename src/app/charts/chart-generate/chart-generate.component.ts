import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { ParamMap, Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-chart-generate',
  templateUrl: './chart-generate.component.html',
  styleUrls: ['./chart-generate.component.css']
})
export class ChartGenerateComponent implements OnInit {
  chartRecord: object;
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];
  constructor(private route: ActivatedRoute) {
    console.log("Chart Works");
   }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      var id = params['id'];
      this.getChartRecords(id);
    });
  }
  getChartRecords(id){
    this.chartRecord = this.customerList.filter(x=>x.id == id)[0];  
  }  
  customerList:Array<any> = [
    {"id":1,"name":"Bar Chart"},
    
  ];
}
