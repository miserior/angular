import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { Student } from '../../../shared/entities';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnosAPI {
  baseUrl = "http://localhost:3000";

  constructor(
    private http: HttpClient
  ) { }

  getAlumnos(): Observable<Student[]> {
    
    return this.http.get<Student[]>(`${this.baseUrl}/students`).pipe(delay(1000)); // Simulate a delay for demonstration purposes
  }
}
