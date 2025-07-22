import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Toolbar } from './toolbar/toolbar';
import { Navbar } from './navbar/navbar';
import { HttpClient } from '@angular/common/http';
import { Student } from '../shared/entities';
import { CommonModule } from '@angular/common';
import { StudentsTable } from './students-table/students-table';
import { AddForm } from './add-form/add-form';
import { DeleteForm } from './delete-form/delete-form';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Toolbar,
    Navbar,
    CommonModule,
    StudentsTable,
    AddForm,
    DeleteForm
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('entregable');
  students: Student[] = [];
  activeSection = 'students';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Student[]>('/mocks/students.json').subscribe((data) => {
      this.students = data;
    });
  }

  addStudent(student: Student) {
    console.log('Adding student:', student);
    this.students = [...this.students, student];
  }

  deleteStudent(dni: string) {
    const studentsList = this.students.filter(
      (student) => student.dni.toString() !== dni
    );
    this.students = [...studentsList];
  }
}
