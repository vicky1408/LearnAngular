import { Component, OnInit, Input } from '@angular/core';
import { appNames } from "../app";

@Component({
  selector: 'app-app-input',
  templateUrl: './app-input.component.html',
  styleUrls: ['./app-input.component.less']
})
export class AppInputComponent implements OnInit {
  
  @Input() appEdit: appNames;
  
  constructor() { }

  ngOnInit() {
  }

}
