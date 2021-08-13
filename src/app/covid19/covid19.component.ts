import { Component, OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { Covid19Service } from '../covid19-service.service';

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.css']
})
export class Covid19Component implements OnInit {

  covidData !: any;
  totalRecords !: string;
  page: number = 1;

  constructor(private service: Covid19Service) { 
    
  }

  ngOnInit(): void {
    this.getAllReports();
  }

  getAllReports(){
    this.service.covid19Reports()
    .subscribe(res => {
      this.covidData = res;
      this.totalRecords = this.covidData.length;
    })
  }

}
