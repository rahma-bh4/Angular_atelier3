import { Component,OnInit } from '@angular/core';
import { Voiture } from '../model/voiture.model';
import { ActivatedRoute, Router } from '@angular/router';
import { VoitureService } from '../services/voiture.service';

@Component({
  selector: 'app-update-voiture',
  templateUrl: './update-voiture.component.html',
  styles: ``
})
export class UpdateVoitureComponent implements OnInit {
  currentVoiture=new Voiture();
  constructor(private activatedRoute: ActivatedRoute,
       private voitureService:VoitureService,
       private router :Router){

       }
       ngOnInit()
       {
          this.currentVoiture=this.voitureService.consulterVoiture(this.activatedRoute.snapshot.params['id']);
          console.log(this.currentVoiture);
       }
       updateVoiture() 
       { 
         this.voitureService.updateVoiture(this.currentVoiture);
         this.router.navigate(['voitures']); 
       } 
  
}
