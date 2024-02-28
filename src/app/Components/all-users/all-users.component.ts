import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/userservice.service';
import { AdminserviceService } from '../../services/adminservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrl: './all-users.component.css'
})
export class AllUsersComponent implements OnInit{
  users: any[]; // Define a property to hold the users data

  constructor(private adminService: AdminserviceService,private router:Router, private route: ActivatedRoute) { } // Inject the UserService

  ngOnInit(): void {
    // Call the service method to fetch users data
    this.adminService.getAllUsers().subscribe(
      (data:any[]) => {
        this.users = data; // Assign the fetched users data to the users property
        console.log(data)
      },
      (error) => {
        console.error('Error fetching users:', error);
        // Handle error as needed
      }
    );

  }
  assignTraining(id:any){
    console.log(id)
    this.router.navigate(['../assign', id], { relativeTo: this.route });
    
  }

}
