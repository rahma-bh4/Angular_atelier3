import { Component,OnInit } from '@angular/core';
import { Voiture } from '../model/voiture.model';
import { VoitureService } from '../services/voiture.service';
import { Router } from '@angular/router';
import { Marque } from '../model/marque.model';

@Component({
  selector: 'app-add-voiture',
  templateUrl: './add-voiture.component.html'
  
})
export class AddVoitureComponent implements OnInit {
  newVoiture= new Voiture(); 
  marques!:Marque[]
  newIdMarque!:number;
  newMarque!:Marque;
  constructor(private voitureService: VoitureService,
    private router :Router
  ){   } 
  ngOnInit(): void {
    // Récupérer les marques depuis le service voitureService
    this.marques = this.voitureService.listeMarques(); // Assure-toi que cette méthode existe
  }
    addVoiture()
    {
      this.newMarque =
this.voitureService.consulterMarque(this.newIdMarque);
this.newVoiture.marque= this.newMarque;
this.voitureService.ajouterVoiture(this.newVoiture);
this.router.navigate(['voitures']);

      
    }
}
