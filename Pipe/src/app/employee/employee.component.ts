import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
  public tableheader = [
    {
      "id": "Id",
      "name": "Name",
      "department": "Department",
      "age": "Age",
      "date":"Date",
      "salary": "Salary",
      "country": "Country"
    }
  ]

  public employee = [
    {
      "id": 1,
      "name": "Jaitry Patel",
      "department": "Frontend",
      "age": 21,
      "date":"date",
      "salary": "10,00,000",
      "country": "USA"
    },
    {
      "id": 2,
      "name": "Om Patel",
      "department": "QA",
      "age": 15,
      "date":"date",
      "salary": "10,00,000",
      "country": "Ahmedavad"
    },
    {
      "id": 3,
      "name": "Jayanti Patel",
      "department": "Frontend",
      "age": 60,
      "date":"date",
      "salary": "10,00,000",
      "country": "Manali"
    },
    {
      "id": 4,
      "name": "Damyanti Patel",
      "department": ".net",
      "age": 49,
      "date":"date",
      "salary": "10,00,000",
      "country": "Maldivas"
    },
    {
      "id": 5,
      "name": "Jemi Patel",
      "department": "BA",
      "age": 24,
      "date":"date",
      "salary": "10,00,000",
      "country": "India"
    }
  ]
}
