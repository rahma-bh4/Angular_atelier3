import { Component } from '@angular/core';
import { Voiture } from '../model/voiture.model';
import { VoitureService } from '../services/voiture.service';

@Component({
  selector: 'app-voitures',
  templateUrl: './voitures.component.html'
  
})
export class VoituresComponent {
  voitures : Voiture[];
  constructor(private voitureService: VoitureService ) { 
    this.voitures = voitureService.listeVoitures(); 
}
supprimerVoiture(v: Voiture) 
   { 
    let conf = confirm("Etes-vous sûr ?"); 
         if (conf) 
      this.voitureService.supprimerVoiture(v); 
   } 
}
