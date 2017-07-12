import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard/dashboard.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  listall;
  constructor(public dashboard: DashboardService) { }

  ngOnInit() {
    this.dashboard.listall(function(list){
      console.log(list);
      
      this.listall = list;
    });
  }

}
