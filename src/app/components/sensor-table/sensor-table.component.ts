// src/app/components/sensor-table/sensor-table.component.ts

import { Component, OnInit } from '@angular/core';
import { SensorDataService, SensorData } from '../../services/sensor-data.service';
import { CommonModule } from '@angular/common'; // Importar CommonModule

@Component({
  selector: 'app-sensor-table',
  templateUrl: './sensor-table.component.html',
  styleUrls: ['./sensor-table.component.css'],
  standalone: true, // Indica que es un componente independiente
  imports: [CommonModule] // No es necesario HttpClientModule aquí
})
export class SensorTableComponent implements OnInit {

  sensorData: SensorData[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private sensorDataService: SensorDataService) { }

  ngOnInit(): void {
    this.fetchSensorData();
  }

  fetchSensorData(): void {
    this.sensorDataService.getSensorData().subscribe(
      (data: SensorData[]) => {
        this.sensorData = data;
        this.isLoading = false;
      },
      (error: string) => {
        this.errorMessage = error;
        this.isLoading = false;
      }
    );
  }

}
