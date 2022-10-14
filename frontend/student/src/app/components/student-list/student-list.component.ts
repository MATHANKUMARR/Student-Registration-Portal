import { Component, OnInit,} from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { StudentServiceService } from 'src/app/services/student/student-service.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})


export class StudentListComponent implements OnInit {
  readonly studentDetails$!: Observable<any[]>;
  constructor(public studentService:StudentServiceService, private router:Router,private toastr:ToastrService) {
    this.studentDetails = this.studentService.getAllDAta().subscribe();
   }

  studentDetails:any = [];
  studentId!: string;
  count!: number;

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData(){
    this.studentService.getAllDAta().subscribe((data:any) => {
      this.studentDetails = data;
      this.count = this.studentDetails.length;
    })
  }

  deleteStudent(id:any){
    this.studentService.deleteStudentData(id).subscribe((res:any)=>{
      if (res.status == 204) {
        // location.reload()
      }
    });
    this.toastr.info("Student removed successfully!","Removed")
    this.count = this.count - 1;
    this.studentDetails = this.studentDetails.filter((obj:any) => obj.student_id !== id);
  }
}
