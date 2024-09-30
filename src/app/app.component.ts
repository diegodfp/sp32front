// src/app/app.component.ts

import { Component } from '@angular/core';
import { SensorTableComponent } from './components/sensor-table/sensor-table.component';

@Component({
  selector: 'app-root',
  template: `<app-sensor-table></app-sensor-table>`,
  styles: [],
  standalone: true, // Indica que es un componente independiente
  imports: [SensorTableComponent] // Ya no es necesario HttpClientModule aquí
})
export class AppComponent { }
