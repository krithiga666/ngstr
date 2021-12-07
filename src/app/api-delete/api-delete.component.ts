import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-api-delete',
  templateUrl: './api-delete.component.html',
  styleUrls: ['./api-delete.component.css']
})
export class ApiDeleteComponent implements OnInit {
  constructor(private dataService: DataService) { }
  ngOnInit(): void {}
  ondelete(id: number){
    this.dataService.deleteItem(id).subscribe();
    console.log("Deleted Successfully");
  }

}
