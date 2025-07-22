import { Component, Input } from '@angular/core';
import { Student } from '../../shared/entities';
import { MatTableModule } from '@angular/material/table';
import { FullnamePipe } from '../../shared/pipes/fullname-pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-students-table',
  imports: [MatTableModule, FullnamePipe,MatFormFieldModule, MatInputModule],
  templateUrl: './students-table.html',
  styleUrl: './students-table.css'
})
export class StudentsTable  {
@Input() students: Student[] = []; 
displayedColumns: string[] = ['fullname', 'age', 'dni', 'average'];
}
