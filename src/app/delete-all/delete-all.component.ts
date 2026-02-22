import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-all',
  standalone: true,
  templateUrl: './delete-all.component.html'
})
export class DeleteAllComponent {

  constructor(
    private api: ApiserviceService,
    private router: Router
  ) {}

  deleteAll() {

    const confirmDelete = confirm("⚠️ Are you sure you want to delete ALL employees?");

    if (!confirmDelete) {
      return;
    }

    this.api.deleteAllEmployees().subscribe({
      next: (res) => {
        alert("✅ All employees deleted successfully");
        this.router.navigate(['/integrations']);
      },
      error: (err) => {
        alert("❌ Error while deleting employees");
        console.log(err);
      }
    });
  }
}