import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ManageService } from 'src/app/services/manage/manage.service';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.css']
})
export class UpdateRoomComponent implements OnInit{

  
  manageForm = new FormGroup({
    _id: new FormControl(),
    name: new FormControl(),
    image: new FormControl(),
  })

  imageChange(evt:any){
    this.manageForm.patchValue({image: evt.target.files[0]})
  }

  constructor(
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private manage: ManageService,
    private router: Router,
    private activatedroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = this.activatedroute.snapshot.paramMap.get('id')
    this.manageForm.patchValue({ _id:id})
    this.getSinglemanage(id)
  }

  getSinglemanage(id:any){
    this.spinner.show()
    this.manage.getSingle({ _id: id }).subscribe({
      next: (result:any)=>{
        this.spinner.hide()
        if (result.success) {
          this.manageForm.patchValue({ name: result.data.name })
        } 
        else {
          this.toastr.error(result.messege)
        }
      },

      error:(err)=>{
        this.spinner.hide()
        console.log("Error", err);
        this.toastr.error("Some Error Occured")
      },

      complete:()=>{
        this.spinner.hide()
      }
    })
  }

  submit(){
    this.spinner.show()
    let a = new FormData()
    a.append("_id", this.manageForm.value._id ??'')
    a.append("name", this.manageForm.value.name ??'')
    a.append("room_image", this.manageForm.value.image ??'')
    this.manage.updateManage(a).subscribe({

    })
    }
}



