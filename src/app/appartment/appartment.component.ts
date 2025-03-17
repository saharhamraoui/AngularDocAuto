import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apartment } from '../core/models/Appartement';
import { ResidenceService } from '../residence.service';

@Component({
  selector: 'app-appartment',
  templateUrl: './appartment.component.html',
  styleUrls: ['./appartment.component.css']
})
export class AppartmentComponent {

  constructor(private service:ResidenceService,
    private route: ActivatedRoute,
    private router:Router
  ){

  }
  residenceId!: number;
 listAppar:Apartment[]=[];

  ngOnInit(): void{
    this.residenceId = Number(this.route.snapshot.paramMap.get('id'));
   this.getAllAppart();
 }

 getAllAppart() {
  this.service.getApartmentsByResidence(this.residenceId).subscribe((data: Apartment[])=> {
    this.listAppar = data;
  });
}



}
