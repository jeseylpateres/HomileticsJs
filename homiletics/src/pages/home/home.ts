import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { MenuPage } from '../menu/menu';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public app: App) {
  }

  menu(){
        this.navCtrl.push(MenuPage);
  }


  // Bar Chart : Start ===============================================
  public barChartType:string = 'bar';
  public barChartLegend:boolean = false;

  public barChartColors:any[] = [
    {
      backgroundColor: 'rgba(61, 163, 108, 1)',
      borderColor: 'rgba(61, 163, 108, 1)'
    }
  ];

  public barChartOptions:any = {
    scaleShowVerticalLines: false,    
    responsive: true,
    maintainAspectRatio: true,
    title:{
      display : false,
      text: 'ENTIRE BIBLE'
    },
    scales:{
      xAxes:[{
          stacked:true
      }],
      yAxes:[{
          stacked:false
      }]
    }
  };

  public barChartDataSet:any[] = [
    {
      label: 'Complete Study',
      data: [20, 40, 0, 10, 0, 0, 25, 0, 0, 0, 0, 0]
    },
    {
      label: 'Total Chapter',
      data: [50, 40, 27, 36, 34, 24, 21, 4, 31, 24, 22, 25, 29,36,10,13,10]
    }
  ];
  public barChartLabels:string[] = [
    'GEN', 
    'EXO', 
    'LEV', 
    'NUM', 
    'DEU', 
    'JOSH', 
    'JUDG',
    'RUTH',
    '1 SAM',
    '2 SAM',
    '1 KIN',
    '2 KIN',
    '1 CHR',
    '2 CHR',
    'EZRA',
    'NEHE',
    'ESTH',
  ];

  // events
  public chartClicked(e:any):void {
    console.log(e);
    
    let x= e.active[0];
    if(x !== undefined) {
      console.log("Bar #: " + x._index);
      console.log(x._model.datasetLabel);
      console.log(x._model.label);
    }
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round((Math.random() * 100)%50),//GEN
      40,//EXO
      0,//LEV
      ((Math.random() * 100) %36),//NUM
      0,//DEU
      ((Math.random() * 100)%24),//JOSH
      25];//JUDG
    let clone = JSON.parse(JSON.stringify(this.barChartDataSet));
    clone[0].data = data;
    this.barChartDataSet = clone;
  }
  // Bar Chart : END ===============================================

}