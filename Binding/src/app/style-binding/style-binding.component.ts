import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.scss']
})
export class StyleBindingComponent {
  status = "All good";
  
  // myData = [
  //   { id: 1, user: "Jane", tokens: 2, used: 1, colour: "purple" },
  //   { id: 2, user: "Emma", tokens: 1, used: 1, colour: "pink" },
  //   { id: 3, user: "Sally", tokens: 2, used: 3, colour: "green" },
  // ];
}
