import { Component } from '@angular/core';
import { AlumnosAPI } from './alumnos-api';
import { Student } from '../../../shared/entities';
import { CommonModule, JsonPipe } from '@angular/common';
import { Observable, switchMap } from 'rxjs';
import { StudentsTable } from '../../students-table/students-table';

@Component({
  selector: 'app-alumnos',
  imports: [CommonModule, JsonPipe, StudentsTable],
  templateUrl: './alumnos.html',
  styleUrl: './alumnos.css',
})
export class Alumnos {
  alumnos$!: Observable<Student[]>;
  constructor(private alumnosApi: AlumnosAPI) {}
  ngOnInit(): void {
    this.alumnos$ = this.alumnosApi.getAlumnos();
  }

  deleteStudent(student: Student) {
    this.alumnos$ = this.alumnosApi
      .deleteAlumno(student)
      .pipe(switchMap(() => this.alumnosApi.getAlumnos()));
  }
}
