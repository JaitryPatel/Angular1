
import { Component,OnInit ,OnChanges,SimpleChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
  data = "Hello Jaitry!"
  updateData() {
    this.data= "Hi Jaitry......."
  }
  title = 'Titan';
  ngOnInit(): void {
    console.log('OnInit app');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges app');
  }
  ngDoCheck(): void {
    console.log('DoCheck app');
  }
  ngAfterContentInit(): void {
    console.log('AfterContentInit app');
  }
  ngAfterContentChecked(): void {
    console.log('AfterContentChecked app');
  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit app');
  }
  ngAfterViewChecked(): void {
    console.log('AfterViewChecked app');
  }
  ngOnDestroy(): void {
    console.log('onDestroy app');
  }
}
