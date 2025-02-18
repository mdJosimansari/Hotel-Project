import { Component, OnInit } from '@angular/core';
import { baseUrl,imageUrl } from 'endpoint';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ManageService } from 'src/app/services/manage/manage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-rooms',
  templateUrl: './manage-rooms.component.html',
  styleUrls: ['./manage-rooms.component.css']
})
export class ManageRoomsComponent implements OnInit {
  manage: any[] = [];

  constructor(
    private manageService: ManageService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getAllManage();
  }

  getImageUrl(path: any) {
    return imageUrl + path;
  }

  getAllManage() {
    this.spinner.show();
    this.manageService.getAll({}).subscribe({
      next: (result: any) => {
        this.spinner.hide();
        if (result.success) {
          this.toastr.success(result.message);
          this.manage = result.data;
        } else {
          this.toastr.error(result.messege);
        }
      },
      error: (err) => {
        this.spinner.hide();
        this.toastr.error('Some error occured');
      },

      complete: () => {
        this.spinner.hide();
      },
    });
  }

  deleteManage(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.spinner.show();
        this.manageService.deleteManage({ _id: id }).subscribe({
          next: (result: any) => {
            this.spinner.hide();
            if (result.success) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });
            } else {
              this.toastr.error(result.messege);
            }
          },
          error: (err) => {
            this.spinner.hide();
            this.toastr.error('Some Error Occured');
          },
          complete: () => {
            this.spinner.hide();
          },
        });
      }
    });
  }
}
