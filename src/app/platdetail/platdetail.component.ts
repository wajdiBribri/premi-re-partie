import { Component, OnInit } from '@angular/core';

const PLAT = {
	  "id": "0",
      "nom": "Poisson",
      "image": "../assets/images/Poisson.png",
      "categorie": "principal",
      "special": true,
      "label": "Chaud",
      "prix": "15.500",
      "description": "Une daurade entière grillée et accompagnée de pommes de terre et de Tastira Tunisienne, le tout agrémenté au citron.",
      "commentaires": [
        {
          "score": 5,
          "commentaire": "Un vrai délice!",
          "auteur": "Ahmed Hmida",
          "date": "2020-08-16T16:51:28.556094Z"
        },
        {
          "score": 4,
          "commentaire": "Resto qui se veut chic et luxueux!",
          "auteur": "Saleh Ben Ahmed",
          "date": "2020-02-05T17:27:18.556094Z"
        },
        {
          "score": 3,
          "commentaire": "Mangez-le, just mangez-le!",
          "auteur": "Amal Safi",
          "date": "2019-01-13T17:57:28.556094Z"
        },
        {
          "score": 4,
          "commentaire": "Ça reste la meilleure cuisine à sfax. ",
          "auteur": "Mahdi Toumi",
          "date": "2019-12-04T17:57:28.556094Z"
        },
        {
          "score": 3,
          "commentaire": "C'est mon anniversaire, on va faire la fête!",
          "auteur": "Mouna Aydi",
          "date": "2019-11-02T17:57:28.556094Z"
        }
	]
};
@Component({
  selector: 'app-platdetail',
  templateUrl: './platdetail.component.html',
  styleUrls: ['./platdetail.component.scss']
})
export class PlatdetailComponent implements OnInit {
  plat = PLAT;
  
  constructor() { }

  ngOnInit(): void {
  }

}
 