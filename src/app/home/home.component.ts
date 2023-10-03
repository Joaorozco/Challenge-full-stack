import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  view: [number, number] = [400, 200];
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  single: any;
  allTransaction: any;
  allCards: any;

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  xAxisLabel = 'dia';
  showYAxisLabel = false;
  yAxisLabel = 'monto';



  constructor(private service: DataServiceService) {

  }


  ngOnInit(): void {
    this.service.allBalance().subscribe(data => {
      this.single = data
    })

    this.service.allTransaction().subscribe(data => {
      this.allTransaction = data;
    })

    this.service.allCards().subscribe(data => {
      this.allCards = data;
    })
  }

  onSelect(event: any) {
    console.log(event);
  }




}
