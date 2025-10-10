import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { ViewAllStudent } from './view-all-student/view-all-student';
import { Addstudent } from './addstudent/addstudent';
import { ViewAllLocations } from '../../location/view-all-locations/view-all-locations';
import { UpdateStudent } from './update-student/update-student';
import { Addlocation } from '../../location/addlocation/addlocation';
import { UpdateLocation } from '../../location/update-location/update-location';
import { Registration } from './auth/registration/registration';
import { Userprofile } from './auth/userprofile/userprofile';
import { Login } from './auth/login/login';
import { Admin } from './component/auth/admin/admin';
import { Logout } from './auth/logout/logout';
import { PoliceStation } from './location/police-station/police-station';
import { DistView } from './location/district/dist-view/dist-view';
import { DivView } from './location/division/div-view/div-view';
import { Conview } from './location/Country/conview/conview';
import { DistAdd } from './location/district/dist-add/dist-add';
import { DivAdd } from './location/division/div-add/div-add';
import { ConAdd } from './location/Country/con-add/con-add';

const routes: Routes = [
  { path: '', component: Home },

  { path: 'allstu', component: ViewAllStudent },
  { path: 'addstu', component: Addstudent },
  { path: 'updateStudent/:id', component: UpdateStudent },

  { path: 'allloc', component: ViewAllLocations },
  { path: 'addloc', component: Addlocation },
  { path: 'updateLocation/:id', component: UpdateLocation },
  { path: 'register' , component:Registration},
  { path: 'userprofile' , component:Userprofile},
  { path: 'adminprofile' , component:Admin},
  { path: 'login' , component:Login},
  { path: 'logout' , component:Logout},
  { path: 'ps' , component:PoliceStation},
  { path: 'dist' , component:DistView},
  { path: 'adddist' , component:DistAdd},
  { path: 'adddiv' , component:DivAdd},
  { path: 'div' , component:DivView},
  { path: 'addcon' , component:ConAdd},
  { path: 'con' , component:Conview},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// const routes: Routes = [
// {path: 'home', component:HomePath}
// ];