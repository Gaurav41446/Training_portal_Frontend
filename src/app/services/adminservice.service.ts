import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Observable, catchError, map, throwError } from 'rxjs';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
 
  
  apiUrl:string='http://localhost:8080/'
  
  

  constructor(
    private http:HttpClient
  ) { }

  assignTraining(userId: number, trainingId: number): Observable<any> {
    const formData = new FormData();
    formData.append('userId', userId.toString());
    formData.append('trainingId', trainingId.toString());

    // Set headers to indicate form-data content type
    const headers = new HttpHeaders().set('Content-Type', 'multipart/form-data');

    return this.http.post(`${this.apiUrl}admin/assign-training`, formData, { headers }).pipe(
      catchError(error => {
        let errorMessage = 'An error occurred while assigning training.';
        if (error.error instanceof ErrorEvent) {
          // Client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // Server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          if (error.error instanceof ProgressEvent && error.error.type === 'error') {
            // If it's a network error or non-JSON response, handle it here
            errorMessage = 'Server returned a non-JSON response.';
          }
        }
        console.error(errorMessage);
        return throwError(errorMessage);
      })
    );
  }
  addTraining(data: any) {
    return this.http.post(this.apiUrl + 'training/register-training', data, { responseType: 'text' });
  }
  
   
  getTrainings() {
    return this.http.get(this.apiUrl)
  }
  public loginadmin(admin:any){
    return this.http.post(`${baseUrl}/admin/admin-login`,admin)
  }
  addProject(projectData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'project/register-project', projectData);
  }

  //sweta
  fetchProjects(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'project/available-projects');
  }
  public getAllUsers(){
    return this.http.get<any[]>(`${baseUrl}/users/allUsers`);
  }
}
