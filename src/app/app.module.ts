import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddApartmentComponent } from './add-apartment/add-apartment.component';
import { AddResidenceComponent } from './add-residence/add-residence.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppartmentComponent } from './appartment/appartment.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidenceDetailsComponent } from './residence-details/residence-details.component';
import { ResidenceComponent } from './residence/residence.component';
import { UpdateResidenceComponent } from './update-residence/update-residence.component';

@NgModule({
  declarations: [
    AppComponent,
    ResidenceComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    HomeComponent,
    ResidenceDetailsComponent,
    UpdateResidenceComponent,
    AddResidenceComponent,
    AppartmentComponent,
    AddApartmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
