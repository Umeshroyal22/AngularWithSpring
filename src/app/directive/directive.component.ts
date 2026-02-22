import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directive',
  standalone: true,
  imports: [CommonModule],   // required for ngIf, ngFor, ngSwitch
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {

  abc = true;

  emp = ["Abi", "Umesh", "Manohar"];
  fruits = ['Apple', 'Banana', 'Mango'];

  selectedFruit = '';   // used for ngSwitch

  addFruit(fru: string) {
    if (fru && fru.trim() !== '') {
      this.fruits.push(fru.trim());
      this.selectedFruit = fru.trim(); // set value for ngSwitch
    }
  }
}
