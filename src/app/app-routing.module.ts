import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { UserdashboardComponent } from './pages/userdashboard/userdashboard.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { AdmindashboardComponent } from './pages/admindashboard/admindashboard.component';
import { AddTrainingComponent } from './Components/add-training/add-training.component';
import { AdminHomeComponent } from './Components/admin-home/admin-home.component';
import { TrainingListComponent } from './Components/training-list/training-list.component';
import { AddProjectComponent } from './Components/add-project/add-project.component';
import { ProjectListComponent } from './Components/project-list/project-list.component';
import { AllUsersComponent } from './Components/all-users/all-users.component';
import { AssignTrainingsComponent } from './Components/assign-trainings/assign-trainings.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

const routes: Routes = [



{
  path : 'login',
  component : LoginComponent,
  pathMatch : 'full'
},
{
  path : 'signup',
  component : SignupComponent,
  pathMatch : 'full'
},
{
  path : 'about-us',
  component : AboutUsComponent,
  pathMatch : 'full'
},
{
  path : 'contact-us',
  component : ContactUsComponent,
  pathMatch : 'full'
},
{
  path : '',
  component : HomepageComponent,
  pathMatch : 'full'
},

{
  path : 'userDashboard',
  component : UserdashboardComponent,
  children: [
    { path: 'user-profile', component: UserProfileComponent, pathMatch:'full' },
    {
      path:'assignTraining',
      component: AssignTrainingsComponent,
      pathMatch:'full'
 
    }
   
  ]
 },

{
  path : 'resetPassword',
  component : ForgetPasswordComponent,
  pathMatch : 'full'
},




{
  path: 'admindashboard',
  component: AdmindashboardComponent,
  children: [
    {
      path: 'add-training',
      component: AddTrainingComponent,
      pathMatch: 'full'
    },
    {
      path: 'training-list',
      component: TrainingListComponent
    },
    {
      path: 'assign/:id',
      component: TrainingListComponent

    },
    {
      path: 'add-project',
      component: AddProjectComponent,
      pathMatch: 'full'
    },
    {
      path: 'project-list',
      component: ProjectListComponent,
      pathMatch: 'full'
    },

    {
      path: '',
      component: AdminHomeComponent,
      pathMatch: 'full'
    },
   
    {
      path: 'all-users',
      component: AllUsersComponent,
      pathMatch: 'full'
    },{
      path:'all-users/assign-Training',
      component: AssignTrainingsComponent,
      pathMatch:'full'
 
    }


  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
