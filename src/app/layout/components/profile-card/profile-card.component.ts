import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent {
  nom:string="ZEMZEM";
  prenom:string="Kossay";
  email:string="email.example@enicar.ucar.tn";
  imageSrc:string="../../../../assets/images/Placeholder/blank-profile-picture.png";
  /*"../../../../assets/images/Placeholder/blank-profile-picture.png"
            class="h-12 w-12 rounded-lg object-left-bottom"*/
  constructor(){

  }
}
