import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddApartmentComponent } from './add-apartment/add-apartment.component';
import { AddResidenceComponent } from './add-residence/add-residence.component';
import { AppartmentComponent } from './appartment/appartment.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidenceDetailsComponent } from './residence-details/residence-details.component';
import { ResidenceComponent } from './residence/residence.component';
import { UpdateResidenceComponent } from './update-residence/update-residence.component';

const routes: Routes = [
  { path:'', redirectTo:'home' , pathMatch:'full'},
  { path:'home' ,  component: HomeComponent},
  { path:'addResidence' ,  component: AddResidenceComponent},
  { path:'addAppartment/:id' ,  component: AddApartmentComponent},
  { path:'appartement/:id' ,  component: AppartmentComponent},
  { path:'updateResidence' ,  component: UpdateResidenceComponent},
  { path:'residence',  component: ResidenceComponent},
  { path:'residence/details/:id', component: ResidenceDetailsComponent},
  { path:'**', component: NotFoundComponent}, 

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
