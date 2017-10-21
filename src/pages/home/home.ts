import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { Book } from '../model/book';
import { MenuPage } from '../menu/menu';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public book: Book;

  segmentbook1 : string = "entirebible";
  completeStudies:number = 2;
  ongoingStudies:number = 5;
  quizes: number = 0;
  totalStudies: number = 0;
  percentageCompletion: number = 0;
  bibleTitleBook: string = "The First Book of Moses Called Genesis";
  bibleTitleBookOT: string =  "The First Book of Moses Called Genesis";
  bibleTitleBookNT: string = "The Gospel According to Matthew";


  constructor(public navCtrl: NavController, public app: App) {
      //this.book = new Book();
  }

  menu(){
        this.navCtrl.push(MenuPage);
  }


  // ENTIRE TESTAMENT : Start ===============================================
  public ebBarChartType:string = 'bar';
  public ebBarChartLegend:boolean = false;

  public ebBarChartColors:any[] = [
    {
      backgroundColor: 'rgba(61, 163, 108, 1)',
      borderColor: 'rgba(61, 163, 108, 1)'
    }
  ];

  public ebBarChartOptions:any = {
    scaleShowVerticalLines: false,    
    responsive: false,
    //maintainAspectRatio: true,
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

  public ebBarChartDataSet:any[] = [
    {
      label: 'Complete Study',
      data: [20, 40, 0, 10, 0, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        5, 10, 2, 20, 0, 0, 0, 0, 0,3, 0, 0, 
        0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0
      ]
    },
    {
      label: 'Total Chapter',
      data: [50, 40, 27, 36, 34, 24, 21, 4, 31, 24, 22, 25, 29,36,10,13,10
        , 42, 150, 31, 12, 8, 66, 52, 5, 48, 12, 14, 3, 9, 1, 4, 7, 3, 3, 3, 2, 14, 4
        , 28, 16, 24, 21, 28, 16, 16, 13, 6, 6, 4, 4, 5,3,6,4,33
        , 1, 13, 5, 5, 3, 5, 1, 1, 1, 22
      ]
    }
  ];
  public ebBarChartLabels:string[] = [
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
    
    'JOB',
    'PSAL',
    'PROV',
    'ECCL',
    'SONG',
    'ISAI',
    'JERE',
    'LAME',
    'EZEK',
    'DANI',
    'HOSE',
    'JOEL',
    'AMOS',
    'OBAD',
    'JONAH',
    'MICA',
    'NAHU',
    'HABAK',
    'ZEPH',
    'HAGG',
    'ZECH',
    'MALAC',
    
    'MATT', 
    'MARK', 
    'LUKE', 
    'JOHN', 
    'ACTS', 
    'ROM', 
    '1 COR',
    '2 COR',
    'GAL',
    'EPH',
    'PHIL',
    'COL',
    '1 THES',
    '2 THES',
    '1 TIM',
    '2 TIM',
    'TIT',
    
    'PHILE',
    'HEB',
    'JAM',
    '1 PET',
    '2 PET',
    '1 JOH',
    '2 JOH',
    '3 JOH',
    'JUD',
    'REV'
  ];

  // Entire Bible Events
  public chartClickedForEB(e:any):void {
    console.log(e);
    
    let x= e.active[0];
    if(x !== undefined) {
      //console.log("Bar #: " + x._index);
      //console.log(x._model.datasetLabel);
      //console.log(x._model.label);
      //this.completeStudies = x._index;
      //console.log("getBarChartLevel: " + this.ebBarChartLabels[x._index]);
      //console.log("getCompleteStudyData: " + this.ebBarChartDataSet[0].data[x._index]);
      this.setStudy(x._index, this.ebBarChartDataSet[0].data[x._index], this.ebBarChartDataSet[1].data[x._index]);
    }
  }

  public chartHoveredForEB(e:any):void {
    console.log("HowverResult: " + e);
  }

  private setStudy(index: number, completestudy: number, totalchapter: number) {
    let ongoingstudy = totalchapter - completestudy;
    let getdecimalvalue = completestudy / totalchapter;
    let percentagecompletion;

    if(getdecimalvalue < 0) {
      percentagecompletion = 0;
    } else {
      percentagecompletion = Math.floor((getdecimalvalue) * 100);
    }
    

    this.completeStudies = completestudy;
    this.ongoingStudies = ongoingstudy;
    this.totalStudies = totalchapter;
    this.percentageCompletion = percentagecompletion;
    this.bibleTitleBook = this.bookTitle[index];
    this.bibleTitleBookOT = this.bookTitle[index];
    this.bibleTitleBookNT = this.bookTitle[index + 39];
  }

  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round((Math.random() * 100)%50),//GEN
      40,//EXO
      0,//LEV
      Math.round((Math.random() * 100) %36),//NUM
      0,//DEU
      Math.round((Math.random() * 100)%24),//JOSH
      21,//JUDG
      4,
      Math.round((Math.random() * 100)%20)
    ];
    let clone = JSON.parse(JSON.stringify(this.ebBarChartDataSet));
    clone[0].data = data;
    this.ebBarChartDataSet = clone;
    this.ntBarChartDataSet = clone;
    this.obBarChartDataSet = clone;
  }
  // ENTIRE TESTAMENT : END ===============================================


  // OLD TESTAMENT : START ================================================
  public obBarChartOptions:any = {
    scaleShowVerticalLines: false,    
    responsive: false,
    //maintainAspectRatio: true,
    title:{
      display : false,
      text: 'OLD TESTAMENT'
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

  public obBarChartDataSet:any[] = [
    {
      label: 'Complete Study',
      data: [20, 40, 0, 10, 0, 0, 25, 0, 0, 0, 0, 0
      , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ]
    },
    {
      label: 'Total Chapter',
      data: [50, 40, 27, 36, 34, 24, 21, 4, 31, 24, 22, 25, 29,36,10,13,10
        , 42, 150, 31, 12, 8, 66, 52, 5, 48, 12, 14, 3, 9, 1, 4, 7, 3, 3, 3, 2, 14, 4]
    }
  ];
  public obBarChartLabels:string[] = [
    'GEN', 'EXO', 'LEV', 'NUM', 'DEU',  'JOSH', 
    'JUDG', 'RUTH', '1 SAM', '2 SAM', '1 KIN',
    '2 KIN',  '1 CHR', '2 CHR', 'EZRA', 'NEHE', 'ESTH',

    'JOB', 'PSAL',  'PROV', 'ECCL', 'SONG', 'ISAI',
    'JERE', 'LAME', 'EZEK',  'DANI', 'HOSE',
    'JOEL', 'AMOS', 'OBAD',  'JONAH',  'MICA',
    'NAHU', 'HABAK', 'ZEPH', 'HAGG', 'ZECH', 'MALAC'
  ];

  // Entire Bible Events
  public chartClickedForOB(e:any):void {
    console.log(e);
    
    let x= e.active[0];
    if(x !== undefined) {
      console.log("Bar #: " + x._index);
      console.log(x._model.datasetLabel);
      console.log(x._model.label);
      this.completeStudies = x._index;
      console.log("getBarChartLevel: " + this.ebBarChartLabels[x._index]);
      this.setStudy(x._index, this.ebBarChartDataSet[0].data[x._index], this.ebBarChartDataSet[1].data[x._index]);
    }
  }

  public chartHoveredForOB(e:any):void {
    console.log("HowverResult: " + e);
  }
  // OLD TESTAMENT : END ================================================


  // NEW TESTAMENT : START ================================================
  public ntBarChartOptions:any = {
    scaleShowVerticalLines: false,    
    responsive: false,
    //maintainAspectRatio: true,
    title:{
      display : false,
      text: 'OLD TESTAMENT'
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

  public ntBarChartDataSet:any[] = [
    {
      label: 'Complete Study',
      data: [5, 10, 2, 20, 0, 0, 0, 0, 0,3, 0, 0, 
      0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0 ,0]
    },
    {
      label: 'Total Chapter',
      data: [28, 16, 24, 21, 28, 16, 16, 13, 6, 6, 4, 4, 5,3,6,4,33
        , 1, 13, 5, 5, 3, 5, 1, 1, 1, 22
      ]
    }
  ];
  public ntBarChartLabels:string[] = [
    'MATT', 
    'MARK', 
    'LUKE', 
    'JOHN', 
    'ACTS', 
    'ROM', 
    '1 COR',
    '2 COR',
    'GAL',
    'EPH',
    'PHIL',
    'COL',
    '1 THES',
    '2 THES',
    '1 TIM',
    '2 TIM',
    'TIT',

    'PHILE',
    'HEB',
    'JAM',
    '1 PET',
    '2 PET',
    '1 JOH',
    '2 JOH',
    '3 JOH',
    'JUD',
    'REV'
  ];

  // Entire Bible Events
  public chartClickedForNT(e:any):void {
    console.log(e);
    
    let x= e.active[0];
    if(x !== undefined) {
      console.log("Bar #: " + x._index);
      console.log(x._model.datasetLabel);
      console.log(x._model.label);
      this.completeStudies = x._index;
      console.log("getBarChartLevel: " + this.ebBarChartLabels[x._index]);
      this.setStudy(x._index, this.ebBarChartDataSet[0].data[x._index], this.ebBarChartDataSet[1].data[x._index]);
    }
  }

  public chartHoveredForNT(e:any):void {
    console.log("HowverResult: " + e);
  }
  // NEW TESTAMENT : END ================================================


  bookTitle:string[] = [
    'The First Book of Moses Called Genesis', 
    'The Second Book of Moses Called Exodus', 
    'The Third Book of Moses Called Leviticus', 
    'The Fourth Book of Moses Called Numbers', 
    'The Fifth Book of Moses Called Deuteronomy', 
    'The Book of Joshua', 
    'The Book of Judges',
    'The Book of Ruth',
    'The First Book of Samuel',
    'The Second Book of Samuel',
    'The First Book of Kings',
    'The Second Book of Kings',
    'The First Book of Chronicles',
    'The Second Book of Chronicles',
    'The Book of Ezra',
    'The Book of Nehemiah',
    'The Book of Esther',
    
    'The Book of Job',
    'The Book of Psalms',
    'The Book of Proverbs',
    'The Book of Ecclesiastes',
    'The Song of Songs',
    'The Book of Isaiah',
    'The Book of Jeremiah',
    'The Book of Lamentations',
    'The Book of Ezekiel',
    'The Book of Daniel',
    'The Book of Hosea',
    'The Book of Joel',
    'The Book of Amos',
    'The Book of Obadiah',
    'The Book of Jonah',
    'The Book of Micah',
    'The Book of Nahum',
    'The Book of Habakkuk',
    'The Book of Zephaniah',
    'The Book of Haggai',
    'The Book of Zechariah',
    'The Book of Malachi',
    
    'The Gospel According to Matthew', 
    'The Gospel According to Mark', 
    'The Gospel According to Luke', 
    'The Gospel According to John', 
    'The Acts of the Apostles', 
    'The Epistle of Paul to the Romans', 
    'The First Epistle of Paul to the Corinthians',
    'The Second Epistle of Paul to the Corinthians',
    'The Epistle of Paul to the Galatians',
    'The Epistle of Paul to the Ephesians',
    'The Epistle of Paul to the Philippians',
    'The Epistle of Paul to the Colossians',
    'The First Epistle of Paul to the Thessalonians',
    'The Second Epistle of Paul to the Thessalonians',
    'The First Epistle of Paul to Timothy',
    'The Second Epistle of Paul to Timothy',
    'The Epistle of Paul to Titus',
    
    'The Epistle of Paul to Philemon',
    'The Epistle to the Hebrews',
    'The General Epistle of James',
    'The First Epistle of Peter',
    'The Second Epistle of Peter',
    'The First Epistle of John',
    'The Second Epistle of John',
    'The Third Epistle of John',
    'The Epistle of Jude',
    'The Apocalypse of John'
];

}