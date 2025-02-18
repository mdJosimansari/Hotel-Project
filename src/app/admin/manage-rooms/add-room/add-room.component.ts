import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ManageService } from 'src/app/services/manage/manage.service';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css'],
})
export class AddRoomComponent {
  manageForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
  });

  imageChange(evt: any) {
    this.manageForm.patchValue({ image: evt.target.files[0] });
  }

  constructor(
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private router: Router,
    private manage: ManageService
  ) {}

  submit() {
    this.spinner.show();
    let a = new FormData();
    a.append('name', this.manageForm.value.name ?? '');
    a.append('room_image', this.manageForm.value.image ?? '');

    this.manage.addManage(a).subscribe({
      next: (result: any) => {
        this.spinner.hide();

        if (result.success) {
          this.toastr.success(result.messege);
          this.router.navigateByUrl('./admin/manage-room');
        } else {
          this.toastr.error(result.message);
        }
      }, 

      error: (err) => {
        this.spinner.hide();
        this.toastr.error('Some Error Occured');
        console.log('Error in adding room', err);
      },

      complete: () => {
        this.spinner.hide();
      },
    });
  }
}
