import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactivedriven',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactivedriven.component.html',
  styleUrls: ['./reactivedriven.component.css']
})
export class ReactivedrivenComponent implements OnInit {

  student!: FormGroup;

  ngOnInit(): void {
    this.student = new FormGroup({
      firstname: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
        Validators.pattern('^[a-zA-Z]*$')
      ]),

      lastname: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10)
      ]),

      age: new FormControl('', [
        Validators.required,
        Validators.min(18),
        Validators.max(60)
      ])
    });
  }

  myinfo(data: any) {
    console.log(data);
    alert("Form Submitted Successfully ");
  }
}
