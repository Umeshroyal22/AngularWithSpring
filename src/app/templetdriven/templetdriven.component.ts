import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-templetdriven',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './templetdriven.component.html',
  styleUrls: ['./templetdriven.component.css']
})
export class TempletdrivenComponent {
  userdata(form: any) {
    console.log(form);
    alert("Login Successful ");
  }

}
