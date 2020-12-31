import { Component,ViewChild } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets,RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { Color } from 'ng2-charts';
import { SingleDataSet,  monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { MultiDataSet } from 'ng2-charts';
import { Customer, Representative } from './customer';
import { CustomerService } from './customerservice';
import { Table } from 'primeng/table';
import { PrimeNGConfig } from 'primeng/api';
// import { google } from "google-maps";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./appdemo.scss']
})
export class AppComponent {
  title = 'app';
  //bar chart
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

  //line chart
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];


  //pie chart
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
  public pieChartData: SingleDataSet = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  //doughnut chart
  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  //radar
  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  public radarChartData: ChartDataSets[] = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
  ];
  public radarChartType: ChartType = 'radar';

  //polar chart
  public polarAreaChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
  public polarAreaChartData: SingleDataSet = [300, 500, 100, 40, 120];
  public polarAreaLegend = true;

  public polarAreaChartType: ChartType = 'polarArea';

  //bubble chart
  public bubbleChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        ticks: {
          min: 0,
          max: 30,
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 30,
        }
      }]
    }
  };
  public bubbleChartType: ChartType = 'bubble';
  public bubbleChartLegend = true;

  public bubbleChartData: ChartDataSets[] = [
    {
      data: [
        { x: 10, y: 10, r: 10 },
        { x: 15, y: 5, r: 15 },
        { x: 26, y: 12, r: 23 },
        { x: 7, y: 8, r: 8 },
      ],
      label: 'Series A',
    },
  ];

  //scatter chart
   public scatterChartOptions: ChartOptions = {
    responsive: true,
  };

  public scatterChartData: ChartDataSets[] = [
    {
      data: [
        { x: 1, y: 1 },
        { x: 2, y: 3 },
        { x: 3, y: -2 },
        { x: 4, y: 4 },
        { x: 5, y: -3, r: 20 },
      ],
      label: 'Series A',
      pointRadius: 10,
    },
  ];
  public scatterChartType: ChartType = 'scatter';


  //grid
  customers: Customer[];

  selectedCustomers: Customer[];

  representatives: Representative[];

  statuses: any[];

  loading: boolean = true;


  //pivot
  @ViewChild('dt') table: Table;

  source: any = [
    {'author': 'Deba', 'book': 'Angular'},
    {'author': 'Deba', 'book': 'Physics'},
    {'author': 'Aditya', 'book': 'Angular'}
  ];

  configs: any = {
    'rows': 'author',
    'columns': 'book'
  };

  //map
//   @ViewChild('gmap') gmapElement: any;
// map: google.maps.Map;
// latitude: number;
// longitude: number;
// google: google;


  constructor(private customerService: CustomerService,private primengConfig: PrimeNGConfig) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  
  ngOnInit() {
    this.customerService.getCustomersLarge().then(customers => {
        this.customers = customers;
        this.loading = false;
    });

    this.representatives = [
        {name: "Amy Elsner", image: 'amyelsner.png'},
        {name: "Anna Fali", image: 'annafali.png'},
        {name: "Asiya Javayant", image: 'asiyajavayant.png'},
        {name: "Bernardo Dominic", image: 'bernardodominic.png'},
        {name: "Elwin Sharvill", image: 'elwinsharvill.png'},
        {name: "Ioni Bowcher", image: 'ionibowcher.png'},
        {name: "Ivan Magalhaes",image: 'ivanmagalhaes.png'},
        {name: "Onyama Limba", image: 'onyamalimba.png'},
        {name: "Stephen Shaw", image: 'stephenshaw.png'},
        {name: "XuXue Feng", image: 'xuxuefeng.png'}
    ];

    this.statuses = [
        {label: 'Unqualified', value: 'unqualified'},
        {label: 'Qualified', value: 'qualified'},
        {label: 'New', value: 'new'},
        {label: 'Negotiation', value: 'negotiation'},
        {label: 'Renewal', value: 'renewal'},
        {label: 'Proposal', value: 'proposal'}
    ]
    this.primengConfig.ripple = true;

    // var mapProp = {
    //   center: new google.maps.LatLng(18.5793, 73.8143),
    //   zoom: 15,
    //   mapTypeId: google.maps.MapTypeId.HYBRID
    // };
    // var mapOptions = {
    //   panControl: true,
    //   zoomControl: true,
    //   zoomControlOptions: {
    //     style: google.maps.ZoomControlStyle.LARGE
    // },
    //   mapTypeControl: true,
    //   mapTypeControlOptions: {
    //     style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
    //     position: google.maps.ControlPosition.TOP_CENTER
    //   },
    //   scaleControl: true,
    //   streetViewControl: true,
    //   overviewMapControl: true,
    //   rotateControl: true
  
    // }
  
    // this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    // this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(document.getElementById('roadmap'));
    // this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(document.getElementById('terrain'));
    // this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(document.getElementById('satellite'));
  
}
onActivityChange(event) {
  const value = event.target.value;
  if (value && value.trim().length) {
      const activity = parseInt(value);

      if (!isNaN(activity)) {
          this.table.filter(activity, 'activity', 'gte');
      }
  }
}

onDateSelect(value) {
  this.table.filter(this.formatDate(value), 'date', 'equals')
}

formatDate(date) {
  let month = date.getMonth() + 1;
  let day = date.getDate();

  if (month < 10) {
      month = '0' + month;
  }

  if (day < 10) {
      day = '0' + day;
  }

  return date.getFullYear() + '-' + month + '-' + day;
}

onRepresentativeChange(event) {
  this.table.filter(event.value, 'representative', 'in')
}






// setMapType(mapTypeId: string) {
//   this.map.setMapTypeId(mapTypeId)
// }


// setCenter(e: any) {
//   e.preventDefault();
//   this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));
// }


}
