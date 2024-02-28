import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserdashboardComponent } from './pages/userdashboard/userdashboard.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { AddTrainingComponent } from './Components/add-training/add-training.component';

import { RouterModule } from '@angular/router';
import { AdmindashboardComponent } from './pages/admindashboard/admindashboard.component';
import { AdminHomeComponent } from './Components/admin-home/admin-home.component';
import { TrainingListComponent } from './Components/training-list/training-list.component';
import { AddProjectComponent } from './Components/add-project/add-project.component';
import { ProjectListComponent } from './Components/project-list/project-list.component';
import { AllUsersComponent } from './Components/all-users/all-users.component';
import { AssignTrainingsComponent } from './Components/assign-trainings/assign-trainings.component';
import { ErrorComponent } from './shared/error/error.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';


// import { TrainingListComponent } from '.Components/training-list/training-list.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    HomepageComponent,
    SignupComponent,
    UserdashboardComponent,
    ForgetPasswordComponent,
    AddTrainingComponent,
   
    AdmindashboardComponent,
    AdminHomeComponent,
    TrainingListComponent,
    AddProjectComponent,
    ProjectListComponent,
    AllUsersComponent,
    AssignTrainingsComponent,
    ErrorComponent,
    UserProfileComponent,
    AboutUsComponent,
    ContactUsComponent,
   
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
   
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
