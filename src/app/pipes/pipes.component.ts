import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SqrtPipe } from '../sqrt.pipe';
import { FactorialPipe } from '../factorial.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule, SqrtPipe, FactorialPipe],
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  name = "UmEsh AnDe";
  salary = 1200000;
  dob = new Date();
  obj = { name: "umesh", age: 22, city: "india" };

}