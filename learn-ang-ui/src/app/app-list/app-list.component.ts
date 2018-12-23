import { Component, OnInit, Output } from '@angular/core';
import { allAppNames}  from '../mock-app-api';
import { appNames } from "../app";
import { AppListService } from "../app-list.service";

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.less']
})

export class AppListComponent implements OnInit {
  // singleAppName = allAppNames;
  singleAppName: appNames[];
  selectedApp: appNames;

  constructor(private appListService:AppListService) { }
 
  ngOnInit() {
    this.getAppList();
  }

  onSelect(appName: appNames): void {
    this.selectedApp = appName;
    console:console.log(this.selectedApp);
  }

  getAppList(): void {
    this.singleAppName = this.appListService.getAppNames();
  }
}
