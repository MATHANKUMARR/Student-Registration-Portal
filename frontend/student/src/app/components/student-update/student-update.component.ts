import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StudentServiceService } from 'src/app/services/student/student-service.service';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit{

  constructor(public route:ActivatedRoute,
    public router:Router,
    private toastr:ToastrService,
    private studentService:StudentServiceService) { }

  student_id:any;

  studentUpdateForm: UntypedFormGroup = new UntypedFormGroup({
    first_name: new UntypedFormControl(''),
    last_name: new UntypedFormControl(''),
    gender: new UntypedFormControl(''),
    address: new UntypedFormControl(''),
    email: new UntypedFormControl(''),
    phone: new UntypedFormControl('')
  })

  

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.student_id = params['id'];
    });
    this.getStudentData();
  }

  getStudentData(){
    this.studentService.getOneStudentData(this.student_id).subscribe((data) => {
      this.studentUpdateForm.setValue({
          first_name : data.first_name,
          last_name : data.last_name,
          gender : data.gender,
          address : data.address,
          email : data.email,
          phone : data.phone
        })
    })
  }

  onSubmit() {
    this.studentService.updateStudentData(this.student_id,this.studentUpdateForm.value).subscribe();
    this.studentUpdateForm.reset();
    this.toastr.success("Data updated Successfully!","Updated")
  }
}
