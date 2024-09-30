// src/app/services/sensor-data.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// Define una interfaz para los datos del sensor
export interface SensorData {
  id: number;
  temperature: number;
  humidity: number;
  timestamp: string;
}

@Injectable({
  providedIn: 'root' // Asegura que el servicio esté disponible globalmente
})
export class SensorDataService {

  private apiUrl = 'https://apisp32.onrender.com/api/sensor-data';

  constructor(private http: HttpClient) { }

  // Método para obtener los datos del sensor
  getSensorData(): Observable<SensorData[]> {
    return this.http.get<SensorData[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Manejo de errores
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      console.error('Ocurrió un error:', error.error.message);
    } else {
      // Error del lado del servidor
      console.error(
        `Código de error del servidor: ${error.status}, ` +
        `Mensaje: ${error.message}`);
    }
    // Retornar un observable con un mensaje de error
    return throwError(
      'Algo salió mal; por favor, intenta nuevamente más tarde.');
  }
}
