import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentRegisterComponent } from './components/student-register/student-register.component';
import { StudentUpdateComponent } from './components/student-update/student-update.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { ToastrModule } from 'ngx-toastr';
import {TableModule} from 'primeng/table';
@NgModule({
  declarations: [
    AppComponent,
    StudentRegisterComponent,
    StudentUpdateComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    ToastrModule.forRoot(),
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
