import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
  @Input() tableheader: any;
  @Input() employee: any;
  
  constructor() {

  }
  ngOnInit(): void {

  }
}
