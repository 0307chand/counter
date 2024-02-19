import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  count:number=0;
  isDisabled = false;
  isEven = "Even";

  check(){
    if(this.count%2==1){
      this.isEven="odd"


    }
    else{
      this.isEven="even"
    }
  }
  incr(){
    if(this.count>=20){
      this.isDisabled=true
    }
    else{
      this.count++;
      this.check()
    }
    
  }
  decr(){
    if(this.count<=0){
      this.isDisabled=false

    }
    else{
      this.count--;
      this.check()
    }
  }
  show(){
    this.count=0;
  }
}
