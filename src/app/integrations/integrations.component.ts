import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-integrations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './integrations.component.html',
  styleUrls: ['./integrations.component.css']
})
export class IntegrationsComponent implements OnInit {

  userinfo: any[] = [];

  constructor(private apiservice: ApiserviceService) {}

  ngOnInit(): void {
    this.userData();
  }

  userData() {
    this.apiservice.getData().subscribe({
      next: (res: any) => {
        this.userinfo = res;
        console.log("Data from backend:", res);
      },
      error: (error) => {
        console.log("Something went wrong: ", error);
      }
    });
  }
}