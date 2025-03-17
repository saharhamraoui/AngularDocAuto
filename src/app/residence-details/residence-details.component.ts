import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Residence } from '../core/models/Residence';
import { ResidenceService } from '../residence.service';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent {

  constructor(public serviceRes:ResidenceService,
    public activatedRoute: ActivatedRoute,
    private router: Router

  ){ }
  residence!:Residence;

  id!: number;  

  listResidences:Residence[]=[];

  
 
  ngOnInit(): void {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id')!;
    console.log('Residence ID:', this.id); // Vérifiez si l'ID est correct
  
    this.serviceRes.getResidenceById(this.id).subscribe((data) => {
      console.log('Residence data:', data); // Vérifiez si les données sont bien récupérées
      this.residence = data;
    });
  }



  nextResidence(){
    this.router.navigate(['residence/details/',this.id+1]);
    this.residence = this.listResidences.find(res => res.id === this.id+1)!;
    

  }

  addResidence(){
    this.router.navigate(['addResidence']);

  }

  updateResidence(){
    this.router.navigate(['updateResidence']);
  }

}
