import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})

export class ParentComponent {

  public tableheader = [
    {
      id: "Id",
      name: "Name",
      department: "Department",
      age: "Age",
      salary: "Salary",
      country: "Country"
    }
  ]

  public employee = [
    {
      id: 1,
      name: "Jaitry Patel",
      department: "Frontend",
      age: 21,
      salary: "10,00,000",
      country: "USA"
    },
    {
      id: 2,
      name: "Om Patel",
      department: "QA",
      age: 15,
      salary: "10,00,000",
      country: "Ahmedavad"
    },
    {
      id: 3,
      name: "Jayanti Patel",
      department: "Frontend",
      age: 60,
      salary: "10,00,000",
      country: "Manali"
    },
    {
      id: 4,
      name: "Damyanti Patel",
      department: ".net",
      age: 49,
      salary: "10,00,000",
      country: "Maldivas"
    },
    {
      id: 5,
      name: "Jemi Patel",
      department: "BA",
      age: 24,
      salary: "10,00,000",
      country: "India"
    }
  ]

  onDeleteRow(item: any) {
    console.log(this.employee.splice(this.employee.indexOf(item), 1));
  }
}


