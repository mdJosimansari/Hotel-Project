import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CustomerLayoutComponent } from './customer/customer-layout/customer-layout.component';
import { HomeComponent } from './customer/home/home.component';
import { AboutComponent } from './customer/about/about.component';
import { RegisterComponent } from './customer/register/register.component';
import { ContactComponent } from './customer/contact/contact.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ViewroomComponent } from './customer/viewroom/viewroom.component';
import { BookingHistoryComponent } from './customer/booking-history/booking-history.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { customerGuard } from './customer/guard/customer.guard';
import { ManageCustomersComponent } from './admin/manage-customers/manage-customers.component';
import { ManageBookingComponent } from './admin/manage-booking/manage-booking.component';
import { ManageContactComponent } from './admin/manage-contact/manage-contact.component';
import { LogoutComponent } from './admin/logout/logout.component';
import { MyProfileComponent } from './customer/my-profile/my-profile.component';
import { ViewroomDetailComponent } from './customer/viewroom-detail/viewroom-detail.component';
import { AddBookingComponent } from './customer/add-booking/add-booking.component';
import { ManageRoomsComponent } from './admin/manage-rooms/manage-rooms.component';
import { AddRoomComponent } from './admin/manage-rooms/add-room/add-room.component';
import { UpdateRoomComponent } from './admin/manage-rooms/update-room/update-room.component';
import { ManageProductComponent } from './admin/manage-product/manage-product.component';

const routes: Routes = [
{
  path:"",redirectTo:"/customer/home",pathMatch:"full"
},
{
  path:"login",component:LoginComponent
},
{
  path:"customer",component:CustomerLayoutComponent,
    children:[
      {
        path:"home",component:HomeComponent
      },
      {
        path:"about",component:AboutComponent
      },
      {
        path:"register",component:RegisterComponent
      },
      {
        path:"contact",component:ContactComponent
      },
      {
        path:"viewroom",component:ViewroomComponent
      },
      {
        path:"booking-history",component:BookingHistoryComponent
      },
      {
        path:"change-password",component:ChangePasswordComponent,canActivate:[customerGuard]
      },
      {
        path:"my-profile",component:MyProfileComponent
      },
      {
        path:"viewroom-detail",component:ViewroomDetailComponent
      },
      {
        path:"add-booking",component:AddBookingComponent
      }
    ]
  
},
{
  path:"admin",component:AdminLayoutComponent,
  children:[
    {
      path:"dashboard",component:AdminDashboardComponent
    },
    {
      path:"manage-customer",component:ManageCustomersComponent
    },
    {
      path:"manage-rooms",component:ManageRoomsComponent
    },
    {
      path:"manage-booking",component:ManageBookingComponent
    },
    {
      path:"manage-contact",component:ManageContactComponent
    },
    {
      path:"add-room",component:AddRoomComponent
    },
    {
      path:"update-room",component:UpdateRoomComponent
    },
    {
      path:"logout",component:LogoutComponent
    },
    {
      path:"manage-product",component:ManageProductComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
