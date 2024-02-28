import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminserviceService } from '../../services/adminservice.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrl: './add-project.component.css'
})
export class AddProjectComponent implements OnInit{
  projectForm: FormGroup;

  constructor(private fb: FormBuilder, private adminService: AdminserviceService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.projectForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.projectForm != null && this.projectForm.valid) {
      // Send the form data to the backend for processing
      const data = this.projectForm.value;
      console.log('Form submitted:', data);
      this.adminService.addProject(data).subscribe(
        (response: any) => {
          alert("Project added successfully");
          this.projectForm.reset();
        },
        (error: any) => {
          console.error("Something went wrong ", error);
        }
      )
    } else {
      // Form is invalid, display error message or handle accordingly
      console.error("Form invalid error");
    }
  }
}
