import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../../services/adminservice.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent implements OnInit{
  projects: any[] = []; // Assuming the structure matches ProjectDto

  constructor(private adminService: AdminserviceService) { }

  ngOnInit(): void {
    this.fetchProjects();
  }

  fetchProjects(): void {
    this.adminService.fetchProjects().subscribe(
      (projects: any[]) => {
        this.projects = projects;
      },
      (error) => {
        console.error('Error fetching projects:', error);
      }
    );
  }
}
