import { Component } from '@angular/core';
import { Voiture } from '../model/voiture.model';
import { VoitureService } from '../services/voiture.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-voiture',
  templateUrl: './add-voiture.component.html'
  
})
export class AddVoitureComponent {
  newVoiture= new Voiture(); 
  constructor(private voitureService: VoitureService,
    private router :Router
  ){ 
     
    } 
    addVoiture()
    {
      this.voitureService.ajouterVoiture(this.newVoiture);
      this.router.navigate(['voitures']);
    }
}
