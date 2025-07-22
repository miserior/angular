import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Student } from '../../shared/entities';

@Component({
  selector: 'app-add-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-form.html',
  styleUrl: './add-form.css',
})
export class AddForm implements OnInit {
  
  studentForm!: FormGroup;
  @Output() studentAdded = new EventEmitter<Student>();
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.studentForm = this.fb.group({
      name: ['',Validators.required],
      surname: ['',Validators.required],
      age: ['',[Validators.required, Validators.min(0)]],
      dni: ['',Validators.required],
      average: ['',[Validators.required, Validators.min(0), Validators.max(10)]],
    });
  }
  onSubmit() {
    console.log("Form submitted");
    this.studentAdded.emit(this.studentForm.value as Student);
  }

  onReset() {
    this.studentForm.reset();
  }
}
