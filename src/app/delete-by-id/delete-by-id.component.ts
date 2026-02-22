import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-by-id',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './delete-by-id.component.html',
  styleUrl: './delete-by-id.component.css'
})
export class DeleteByIdComponent {

  empId: number = 0;

  constructor(
    private api: ApiserviceService,
    private router: Router
  ) {}

  deleteById() {

    const confirmDelete = confirm(`⚠️ Are you sure you want to delete employee with ID ${this.empId}?`);

    if (!confirmDelete) return;

    this.api.deleteById(this.empId).subscribe({
      next: (res) => {
       
        this.router.navigate(['/integrations']);
      },
      error: (err) => {
       
        console.log(err);
      }
    });
  }
}