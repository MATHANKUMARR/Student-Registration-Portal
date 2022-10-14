import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StudentServiceService } from 'src/app/services/student/student-service.service';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent implements OnInit {

  constructor(public studentService:StudentServiceService,private router:Router,private toastr:ToastrService) { }

  emailAlreadyex:any = [];
  phoneAlreadyex:any = [];
  getData:any = []

  ngOnInit(): void {
    this.studentService.getAllDAta().subscribe((data:any) =>{
      this.getData = data;
    })
  }

  studentForm = new UntypedFormGroup({
    first_name: new UntypedFormControl(''),
    last_name: new UntypedFormControl(''),
    gender: new UntypedFormControl(''),
    address: new UntypedFormControl(''),
    email: new UntypedFormControl(''),
    phone: new UntypedFormControl('')
  });
  
onSubmit(){
  if(this.validation()){
  this.studentService.addStudent(this.studentForm.value).subscribe();
    this.studentForm.reset();
    this.toastr.success('Student registered successfully!',"Registered");
  }
}
validation(){
  this.emailAlreadyex = this.getData.filter((obj:any) => obj.email === this.studentForm.value.email);
  this.phoneAlreadyex = this.getData.filter((obj:any) => obj.phone === this.studentForm.value.phone);
  
  if(this.studentForm.value.first_name == "" ||
   this.studentForm.value.last_name == "" ||
   this.studentForm.value.gender == "" ||
   this.studentForm.value.address == "" ||
   this.studentForm.value.email == "" ||
    this.studentForm.value.phone == ""){
      this.toastr.warning('Fill out empty fields!',"Info");
      return false;
  }else if(this.emailAlreadyex.length || this.phoneAlreadyex.length){
    this.toastr.warning('Email or Phone already registered!',"Info");
    return false;
  }
  return true;
}

}
