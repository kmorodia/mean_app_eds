import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {Pipe} from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})

export class EmployeeDetailsComponent implements OnInit {

  employeeID;
  details;
  constructor(
    private route:ActivatedRoute,
    private authService:AuthService
    ){ }

  ngOnInit(): void {
    this.employeeID = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(this.employeeID);
    this.authService.loadTable();
    this.details = this.authService.table[this.employeeID-1];
    console.log(this.details);
  }

}
