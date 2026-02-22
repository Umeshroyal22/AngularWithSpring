import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DirectiveComponent } from './directive/directive.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsdemoComponent } from './formsdemo/formsdemo.component';
import { PipesComponent } from './pipes/pipes.component';
import { IntegrationsComponent } from './integrations/integrations.component';
import { AddEmployeComponent } from './add-employe/add-employe.component';
import { DeleteAllComponent } from './delete-all/delete-all.component';
import { DeleteByIdComponent } from './delete-by-id/delete-by-id.component';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'directive', component: DirectiveComponent },
  { path: 'databinding', component: DataBindingComponent },
  { path: 'formsdemo', component: FormsdemoComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'integrations', component: IntegrationsComponent },
  { path: 'add-employe', component: AddEmployeComponent },
  { path: 'delete-all', component: DeleteAllComponent},
  { path: 'delete-by-id', component: DeleteByIdComponent},


 
  

];
