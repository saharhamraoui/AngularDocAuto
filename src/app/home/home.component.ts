import { Component } from '@angular/core';
import { Residence } from '../core/models/Residence';
import { ResidenceService } from '../residence.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public service:ResidenceService){
  
  }

     listResidence:Residence[]=[];

     ngOnInit(): void{
      this.service.getResidences().subscribe((data) => {
        this.listResidence = data;
      });
    }
     
    showLocation(residence:Residence ){
      if (residence.address == "inconnu"){
        alert("ladresse de la residence "+residence.name+"est inconnu")

      }
      alert("ladresse de la residence "+residence.name+"est" +residence.address)
    }

}
