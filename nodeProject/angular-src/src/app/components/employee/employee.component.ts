import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  user:Object;
  constructor(
    private authService:AuthService, private router:Router
  ) { }

  ngOnInit(): void {
    this.authService.getEmployeeTable().subscribe(employeeTable => {
      console.log(employeeTable);
      //this.user = employeeTable['user'];
    },
    err => {
      console.log(err);
      return false;
    });
  }

}
