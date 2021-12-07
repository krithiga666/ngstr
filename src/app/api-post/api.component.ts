import { Component, OnInit } from '@angular/core';
import { SampleData } from '../models/sample-data';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class APIComponent implements OnInit {
employees: any = [];
  constructor(private dataService: DataService) { }
  ngOnInit(): void {
    this.dataService.getList().subscribe((SampleData: SampleData) =>
    {
      this.employees = SampleData;
      console.log(SampleData)
    })
  }

}