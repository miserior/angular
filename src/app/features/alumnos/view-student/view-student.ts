import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../../../../shared/entities';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-student',
  imports: [CommonModule],
  templateUrl: './view-student.html',
  styleUrl: './view-student.css'
})
export class ViewStudent {
  student: Student | undefined;
  constructor(private router: Router) { 
    const navigation = this.router.getCurrentNavigation();
    this.student = navigation?.extras.state?.["student"];
  }
}
