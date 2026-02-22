import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  principal: number = 0;
  rate: number = 0;
  tenure: number = 0;
  emi: number | null = null;
  totalAmount: number | null = null;

  // Called whenever inputs are changed or button clicked
  logValues() {
    console.log('Principal:', this.principal);
    console.log('Rate:', this.rate);
    console.log('Tenure:', this.tenure);
    console.log('Monthly EMI:', this.emi);
    console.log('Total Amount:', this.totalAmount);
  }

  calculateEMI() {
    const r = this.rate / (12 * 100);
    const n = this.tenure * 12;

    if (r === 0) {
      this.emi = this.principal / n;
    } else {
      this.emi = this.principal * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    }

    this.totalAmount = this.emi !== null ? this.emi * n : null;

    // Log the calculation
    this.logValues();
  }
}
