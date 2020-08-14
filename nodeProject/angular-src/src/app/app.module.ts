import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import{MatInputModule} from '@angular/material/input';
import{MatSelectModule} from '@angular/material/select';
import{MatButtonModule} from '@angular/material/button';
import{MatCheckboxModule} from '@angular/material/checkbox';
import{MatChipsModule} from '@angular/material/chips';

import { HttpClientModule } from '@angular/common/http';

import {RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { EmployeeComponent } from './components/employee/employee.component';

import { AuthService } from './services/auth.service';
import {AuthGuard} from './guards/auth.guard';

const appRoutes: Routes = [
  {path:'', component: LoginComponent},
  {path:'employee', component: EmployeeComponent, canActivate:[AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    EmployeeComponent
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
    MatChipsModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
