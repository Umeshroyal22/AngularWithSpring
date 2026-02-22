import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employe',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-employe.component.html',
  styleUrl: './add-employe.component.css'
})
export class AddEmployeComponent {

  employee = {
    id: 0,
    name: '',
    age: 0,
    salary: 0,
    desig: ''
  };

  message = '';

  constructor(
    private api: ApiserviceService,
    private router: Router
  ) {}

  addEmployee() {
    this.api.addEmployee(this.employee).subscribe({
      next: (res) => {
        

        // 👉 navigate to integrations page
        this.router.navigate(['/integrations']);
      },
      error: (err) => {
        
        console.log(err);
      }
    });
  }
}

