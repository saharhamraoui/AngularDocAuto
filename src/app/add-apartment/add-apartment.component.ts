import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResidenceService } from '../residence.service';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent {

  constructor(private service:ResidenceService,
     private activatedRoute:ActivatedRoute,
     private router:Router
  ){}

  apartForm!: FormGroup;
  residenceId!:number;

  ngOnInit():void{
    this.residenceId=+this.activatedRoute.snapshot.paramMap.get('id')!;

    this.apartForm = new FormGroup({
      apartNum: new FormControl('', [Validators.required,Validators.pattern('^[0-9]+$')]),
      floorNum: new FormControl('', [Validators.required,Validators.pattern('^[0-9]+$')]),
      surface: new FormControl('', [Validators.required,Validators.pattern('^[0-9]+$')]),
      terrace: new FormControl(false),
      surfaceterrace: new FormControl({ value: '', disabled: true }),
      category: new FormControl('', Validators.required),
      ResidenceId: new FormControl(this.residenceId, Validators.required)
    });

  


    this.apartForm.get('terrace')?.valueChanges.subscribe(value => {
      if (value) {
        this.apartForm.get('surfaceterrace')?.enable();
      } else {
        this.apartForm.get('surfaceterrace')?.disable();
      }
    });
  }


  onSubmit(): void {
    if (this.apartForm.valid) {
      const newApartment = this.apartForm.value;
      this.service.addApartment(newApartment).subscribe(() => {
        console.log('Appartement ajouté avec succès');
        this.router.navigate(['/appartement', this.residenceId]);
      });
    }
  }
  

 
}
