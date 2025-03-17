import { Component } from '@angular/core';
import { Residence } from '../core/models/Residence';
import { ResidenceService } from '../residence.service';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent {



  constructor(public service:ResidenceService){

  }

  listResidences:Residence[]=[];

  ngOnInit(): void{
   this.getAllResidences();
 }

 getAllResidences() {
  this.service.getResidences().subscribe(data => {
    this.listResidences = data;
  });
}


    searchTerm:string="";

    favouriteList :Residence[]=[]; 

    showLocation(residence:Residence ){
      if (residence.address == "inconnu"){
        alert("ladresse de la residence "+residence.name+"est inconnu")

      }
      alert("ladresse de la residence "+residence.name+"est" +residence.address)
    }

    addToFavoris(residence:Residence ){
          if(!this.favouriteList.includes(residence))
            this.favouriteList.push(residence);
    }

    filterResidences(): Residence[] {
      return this.listResidences.filter(residence =>
        residence.address.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    delteResi(id: number) {
      if (confirm("Voulez-vous vraiment supprimer cette résidence ?")) {
        this.service.deleteResidence(id).subscribe(() => {
          this.listResidences = this.listResidences.filter(res => res.id !== id);
        });
      }
    }




    
}
