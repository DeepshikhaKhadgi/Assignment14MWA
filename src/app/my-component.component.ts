import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-component',
  inputs: ["names"],
  template: `
   <div>
  <ul>
    <li *ngFor="let name of names" appUpper>{{name}}</li>
  </ul>
</div>
  `,
  styles: []
})
export class MyComponentComponent implements OnInit {


  constructor() {
    
   }

  ngOnInit() {
  }

}
