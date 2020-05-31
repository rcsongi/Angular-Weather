import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute} from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './login/login.component';
import { 
  AuthGuardService as AuthGuard 
} from './auth-guard.service';

const routes: Routes = [
  {    path: 'main',
   component: MainPageComponent,
   canActivate: [AuthGuard],
   canLoad: [AuthGuard]
  },
  {    path: 'login', component: LoginComponent  },
  {    path: '', component: LoginComponent  },
  {    path: '**',    component: LoginComponent  }	
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard], 
 
})
export class AppRoutingModule { }
