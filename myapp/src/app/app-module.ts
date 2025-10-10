import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { ViewAllStudent } from './view-all-student/view-all-student';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { Addstudent } from './addstudent/addstudent';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewAllLocations } from '../../location/view-all-locations/view-all-locations';
import { UpdateStudent } from './update-student/update-student';
import { Addlocation } from '../../location/addlocation/addlocation';
import { UpdateLocation } from '../../location/update-location/update-location';
import { Login } from './auth/login/login';
import { Registration } from './auth/registration/registration';
import { Userprofile } from './auth/userprofile/userprofile';
import { Admin } from './component/auth/admin/admin';
import { Logout } from './auth/logout/logout';
import { PoliceStation } from './location/police-station/police-station';
import { DistAdd } from './location/district/dist-add/dist-add';
import { DistView } from './location/district/dist-view/dist-view';
import { DivAdd } from './location/division/div-add/div-add';
import { DivView } from './location/division/div-view/div-view';
import { ConAdd } from './location/Country/con-add/con-add';
import { Conview } from './location/Country/conview/conview';


@NgModule({
  declarations: [
    App,
    Home,
    ViewAllStudent,
    Addstudent,
    ViewAllLocations,
    UpdateStudent,
    Addlocation,
    UpdateLocation,
    Login,
    Registration,
    Userprofile,
    Admin,
    Logout,
    PoliceStation,
    DistAdd,
    DistView,
    DivAdd,
    DivView,
    ConAdd,
    Conview
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(
      withFetch())
  ],
  bootstrap: [App]
})
export class AppModule { }
