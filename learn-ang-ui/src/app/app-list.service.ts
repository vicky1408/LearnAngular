import { Injectable } from '@angular/core';
import { appNames } from "./app";
import { allAppNames } from "./mock-app-api";

@Injectable({
  providedIn: 'root'
})
export class AppListService {

  constructor() { }

  getAppNames(): appNames[] {
    return allAppNames;
  }
}
