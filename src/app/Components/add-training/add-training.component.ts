import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminserviceService } from '../../services/adminservice.service';
import { response } from 'express';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrl: './add-training.component.css'
})
export class AddTrainingComponent implements OnInit{

  // trainingForm: FormGroup;

  // constructor(private fb: FormBuilder,private adminService:AdminserviceService) { }

  // ngOnInit(): void {
  //   this.initializeForm();
  // }

  // initializeForm(): void {
  //   this.trainingForm = this.fb.group({
  //     name: ['', Validators.required],
  //     description: ['', Validators.required],
  //     grades: ['', Validators.required],
  //     projects:['',Validators.required]
  //   });
  // }

  // onSubmit(): void {
  //   if (this.trainingForm!=null && this.trainingForm.valid) {
  //     // Send the form data to the backend for processing
  //     let data=this.trainingForm.value;
  //     console.log('Form submitted:', data);
  //     this.adminService.addTraining(data).subscribe(
  //           (response:any)=>{
  //              alert("Training added successfully")
  //              this.trainingForm.reset()
  //           },
  //           (error:any)=>{
  //              console.error("something went wrong ",error)
  //           }
  //         )
  //   } else {
  //     // Form is invalid, display error message or handle accordingly
  //      console.error("form invalid error")
  //   }
  // }



  //Sweta
  addTrainingForm: FormGroup;
  projects: any[]; // Define a variable to store projects
  successMessage: string | null = null;

  constructor(private fb: FormBuilder, private adminService: AdminserviceService) { }

  ngOnInit(): void {
    this.addTrainingForm = this.fb.group({
      name: ['', Validators.required],
      link: [''],
      description: ['', Validators.required],
      grades: this.fb.array([]),
      projectId: ['', Validators.required],
      // Initialize grades as a FormArray
    });

    this.fetchProjects();
  }

  fetchProjects() {
    this.adminService.fetchProjects().subscribe(
      (response: any) => {
        this.projects = response;
      },
      (error: any) => {
        console.error('Error fetching projects: ', error);
      }
    );
  }

  
  onSubmit() {
    if (this.addTrainingForm.valid) {
      const formData = { ...this.addTrainingForm.value };
  
      // Check if projectId is a valid number
      const projectId = parseInt(formData.projectId);
      if (isNaN(projectId)) {
        console.error('Invalid project ID.');
        // Handle invalid project ID, show an error message or handle accordingly
        return;
      }
  
      // Ensure projectId is a number
      formData.projectId = projectId;
  
      // Construct the Projects object with the projectId
      const project = {
        id: formData.projectId,
        // Include other project properties if needed
      };
  
      formData.projects = project; // Assign the project to the formData
     

  
      this.adminService.addTraining(formData).subscribe(
        (response: any) => {
          console.log('Training added successfully: ', response);
          this.successMessage = 'Training added successfully';
          // Handle success, maybe navigate to another page or show a success message
        },
        (error: any) => {
          console.error('Error adding training: ', error);
          this.successMessage = 'Something went wrong training not added';
          // Handle error, show an error message to the user
        }
      );
    } else {
      // Form is invalid, show error messages or handle accordingly
    }
  }
  
  
  
}
