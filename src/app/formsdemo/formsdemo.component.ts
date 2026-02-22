import { Component } from '@angular/core';
import { TempletdrivenComponent } from "../templetdriven/templetdriven.component";
import { ReactivedrivenComponent } from "../reactivedriven/reactivedriven.component";

@Component({
  selector: 'app-formsdemo',
  standalone: true,
  imports: [TempletdrivenComponent, ReactivedrivenComponent],
  templateUrl: './formsdemo.component.html',
  styleUrls: ['./formsdemo.component.css']
})
export class FormsdemoComponent { }
