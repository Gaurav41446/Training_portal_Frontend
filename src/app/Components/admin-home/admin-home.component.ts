import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent {
  adminData: any;

  constructor(private route: ActivatedRoute){

  }

  ngOnInit(): void {
    //Retrieve user data from route parameters
    
    this.route.paramMap.subscribe(params => {
      this.adminData = JSON.parse(params.get('adminData') || '{}');
      console.log(this.adminData);
    });
  }
}
