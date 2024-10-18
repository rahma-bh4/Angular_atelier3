import { Injectable } from '@angular/core';
import { Voiture } from '../model/voiture.model';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  voitures : Voiture[]; 
constructor() { 
this.voitures = [ 
  {idVoiture:1 , nomVoiture:"Renault clio 4 ", prixVoiture:45000.00, dateCreation : new Date("11/02/2016")},
  {idVoiture : 2,   nomVoiture : "BMW X5",  prixVoiture : 450000, dateCreation : new Date("12/17/2010")}, 
     {idVoiture : 3,   nomVoiture :"Audi Q5", prixVoiture : 100000, dateCreation : new Date("02/20/2020")}  
]; 
}
listeVoitures(): Voiture[]{
  return this.voitures; 
} 
ajouterVoiture( v: Voiture){ 
  this.voitures.push(v); 
} 
supprimerVoiture( v: Voiture){ 
   
   const index = this.voitures.indexOf(v, 0); 
   if (index > -1) { 
     this.voitures.splice(index, 1); 
   } 
}
voiture!:Voiture;
consulterVoiture(id:number): Voiture{     
  this.voiture =  this.voitures.find(v => v.idVoiture == id)!; 
  return this.voiture; 
  } 
  updateVoiture(v:Voiture) 
  { 
   // console.log(p); 
    this.supprimerVoiture(v); 
    this.ajouterVoiture(v); 
    this.trierVoitures(); 
  } 
  trierVoitures(){ 
    this.voitures = this.voitures.sort((n1,n2) => { 
      if (n1.idVoiture! > n2.idVoiture!) { 
          return 1; 
      } 
     if (n1.idVoiture! < n2.idVoiture!) { 
          return -1; 
      } 
    return 0; 
  }); 
  } 
       

}
