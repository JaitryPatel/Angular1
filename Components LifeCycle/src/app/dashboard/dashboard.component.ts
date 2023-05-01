import { Component, OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked, AfterViewInit,AfterViewChecked,OnDestroy, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked, AfterViewInit,AfterViewChecked,OnDestroy {
  
  constructor() {

  }
  ngOnInit(): void {
    console.log('OnInit Dashboard...');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChange Dashboard...');
  }
  ngDoCheck(): void {
    console.log('DoCheck Dashboard...');
  }
  ngAfterContentInit(): void {
    console.log('AfterContentInit Dashboard...');
  }
  ngAfterContentChecked(): void {
    console.log('AfterContentChecked Dashboard...');
  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit Dashboard...');
  }
  ngAfterViewChecked(): void {
    console.log('AfterViewChecked Dashboard...');
  }
  ngOnDestroy(): void {
    console.log('OnDestroy Dashboard...');
  }
@Input() public data: any;
}
