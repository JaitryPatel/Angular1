import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})

export class ChildComponent implements OnInit {
  // @Input() public data: any;
  @Input() tableheader: any;
  @Input() employee: any;
  
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();
  deleteRow(item: any){
    this.delete.emit(item)
  }
 
  constructor() {

  }
  
  ngOnInit(): void {

  }
}

