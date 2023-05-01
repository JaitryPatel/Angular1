import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
  public employees = [
    {
      id:101,
      name:"Jaitry",
      department:"Frontend"
    },
    {
      id:102,
      name:"Om",
      department:"QA"
    },
    {
      id:103,
      name:"Jeel",
      department:"Database"
    }
  ]
}
