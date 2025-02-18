import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { AdminHeaderComponent } from './admin/admin-layout/admin-header/admin-header.component';
import { AdminFooterComponent } from './admin/admin-layout/admin-footer/admin-footer.component';
import { CustomerLayoutComponent } from './customer/customer-layout/customer-layout.component';
import { CustomerHeaderComponent } from './customer/customer-layout/customer-header/customer-header.component';
import { CustomerFooterComponent } from './customer/customer-layout/customer-footer/customer-footer.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './customer/about/about.component';
import { HomeComponent } from './customer/home/home.component';
import { RegisterComponent } from './customer/register/register.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { BookingHistoryComponent } from './customer/booking-history/booking-history.component';
import { ViewroomComponent } from './customer/viewroom/viewroom.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ManageCustomersComponent } from './admin/manage-customers/manage-customers.component';
import { ManageRoomsComponent } from './admin/manage-rooms/manage-rooms.component';
import { ManageBookingComponent } from './admin/manage-booking/manage-booking.component';
import { ManageContactComponent } from './admin/manage-contact/manage-contact.component';
import { LogoutComponent } from './admin/logout/logout.component';
import { MyProfileComponent } from './customer/my-profile/my-profile.component';
import { ViewroomDetailComponent } from './customer/viewroom-detail/viewroom-detail.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AddBookingComponent } from './customer/add-booking/add-booking.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AddRoomComponent } from './admin/manage-rooms/add-room/add-room.component';
import { UpdateRoomComponent } from './admin/manage-rooms/update-room/update-room.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ManageProductComponent } from './admin/manage-product/manage-product.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    CustomerLayoutComponent,
    CustomerHeaderComponent,
    CustomerFooterComponent,
    LoginComponent,
    AboutComponent,
    HomeComponent,
    RegisterComponent,
    AdminDashboardComponent,
    BookingHistoryComponent,
    ViewroomComponent,
    ChangePasswordComponent,
    ManageCustomersComponent,
    ManageRoomsComponent,
    ManageBookingComponent,
    ManageContactComponent,
    LogoutComponent,
    MyProfileComponent,
    ViewroomDetailComponent,
    AddBookingComponent,
    AddRoomComponent,
    UpdateRoomComponent,
    ManageProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule.forRoot({ type: 'square-jelly-box' }),
    HttpClientModule,
    ToastrModule.forRoot(), 
    
  ],
  providers: [],
  bootstrap: [AppComponent]   
})
export class AppModule { }
