import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  // styleUrl: './training-list.component.css'
  styleUrls: ['./training-list.component.css']
})
export class TrainingListComponent implements OnInit{
  id: any;
  baseUrl:any='http://localhost:8080/admin/assign-training';
  requestBody={};
 
  trainings: any[] = [];
 
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { }
 
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.getAvailableTrainings();
  }
  getAvailableTrainings(): void {
    this.http.get<any[]>('http://localhost:8080/training/available-trainings').subscribe(
      (response) => {
        this.trainings = response;
        console.log(response);
      },
      (error) => {
        console.error('Error fetching available trainings:', error);
      }
    );
  }
  addTraining(userId: any, trainingId: any) {
    const requestBody = {}; // Assuming you need to send some data in the request body
  
    // Modify requestBody as needed, depending on your backend requirements
  
    this.http.post(`${this.baseUrl}/${userId}/${trainingId}`, requestBody).subscribe(
      (response) => {
        // Handle success response as needed
      },
      (error) => {
        alert('Training assigned successfully:');
        // Handle error response as needed
      }
    );
  }
  
}
