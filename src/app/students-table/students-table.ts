import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../../shared/entities';
import { MatTableModule } from '@angular/material/table';
import { FullnamePipe } from '../../shared/pipes/fullname-pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students-table',
  imports: [MatTableModule, FullnamePipe,MatFormFieldModule, MatInputModule],
  templateUrl: './students-table.html',
  styleUrl: './students-table.css'
})
export class StudentsTable  {
@Input() students: Student[] = []; 
@Output() deleteEvent = new EventEmitter<Student>();
displayedColumns: string[] = ['fullname', 'age', 'dni', 'average','actions'];
constructor(private router: Router) { }
viewDetails(student: Student) {
    this.router.navigate(['/view-student'], {
      state : { student }
    });
  }
  
  deleteStudent(student: Student) {
    this.deleteEvent.emit(student);
  }
}
