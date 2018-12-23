import { Component, OnInit, Output } from '@angular/core';
import { allAppNames}  from '../mock-app-api';
import { appNames } from "../app";

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.less']
})

export class AppListComponent implements OnInit {
  singleAppName = allAppNames;
  selectedApp: appNames;

  constructor() { }
 
  ngOnInit() {
  }

  onSelect(appName: appNames): void {
    this.selectedApp = appName;
    console:console.log(this.selectedApp);
  }
}
