import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import{MatInputModule} from '@angular/material/input';
import{MatSelectModule} from '@angular/material/select';
import{MatButtonModule} from '@angular/material/button';
import{MatCheckboxModule} from '@angular/material/checkbox';
import{MatChipsModule} from '@angular/material/chips';
import{MatTableModule} from '@angular/material/table';
import{MatCardModule} from '@angular/material/card';

import { HttpClientModule } from '@angular/common/http';

import {RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';

import { AuthService } from './services/auth.service';
import {AuthGuard} from './guards/auth.guard';
import { HighlightDirective } from './highlight.directive';
import { AgepipePipe } from './agepipe.pipe';

const appRoutes: Routes = [
  {path:'', component: LoginComponent},
  {path:'employee', component: EmployeeComponent, canActivate:[AuthGuard]},
  {path:'employee/:id', component: EmployeeDetailsComponent, canActivate:[AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    EmployeeComponent,
    EmployeeDetailsComponent,
    HighlightDirective,
    AgepipePipe,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatTableModule,
    MatCardModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
