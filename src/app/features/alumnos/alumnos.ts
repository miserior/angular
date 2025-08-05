import { Component } from '@angular/core';
import { AlumnosAPI } from './alumnos-api';
import { Student } from '../../../shared/entities';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-alumnos',
  imports: [JsonPipe],
  templateUrl: './alumnos.html',
  styleUrl: './alumnos.css'
})
export class Alumnos {
  alumnos : Student[] = [];
  constructor(private alumnosApi: AlumnosAPI) { }
  ngOnInit(): void {
      this.alumnosApi.getAlumnos().subscribe(alumnos => {
      this.alumnos = alumnos;
    });
  }
}
