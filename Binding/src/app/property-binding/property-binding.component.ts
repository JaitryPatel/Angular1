import { Component,} from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent {
  // title="Angular Property Binding Example"
  // isDisabled= false;

  // myText: string = "Hello World";
  // isDisabled: boolean = true;
  public text= "Learn Angular Tutorial"
  webpage = {
    loginTitle: "Customer Login Panel",
    logo :"https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=1600"
  }


}
