import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {TableStructure} from './tableStructure';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  element_data: TableStructure[];
  displayedColumns: string[] = ['ID','Name', 'Salary', 'Age', 'Details'];
  dataSource = new MatTableDataSource<TableStructure>(this.element_data);

  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.authService.getEmployeeTable().subscribe(employeeTable => {
      //console.log(employeeTable['data']);
      this.authService.storeTable(employeeTable['data']);
      this.dataSource.data = employeeTable['data'] as TableStructure[];
    },
    err => {
      console.log(err);
      return false;
    });

  }

  showDetails(rowDetils){
    console.log(rowDetils);
  }
  

}
