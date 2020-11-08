import { Component, OnInit } from '@angular/core';
import {Plat} from '../commun/plat';
const PLATS : Plat[] = [
  {
    "id": "0",
    "nom": "Poisson",
    "image": "../assets/images/Poisson.png",
    "categorie": "principal",
    "special": true,
    "label": "Chaud",
    "prix": "15.500",
    "description": "Une daurade entière grillée et accompagnée de pommes de terre et de Tastira Tunisienne, le tout agrémenté au citron.",
  },
  {
    "id": "1",
    "nom": "Fondant au chocolat",
    "image": "../assets/images/Fondant.png",
    "categorie": "dessert",
    "special": false,
    "label": "",
    "prix": "4.500",
    "description": "Le mi-cuit au chocolat ou gâteau au cœur coulant est un type de gâteau au chocolat",
  },
  {
    "id": "2",
    "nom": "Spaghetti au fruit de mer",
    "image": "../assets/images/Spaguetti.png",
    "categorie": "principal",
    "special": false,
    "label": "Nouveau",
    "prix": "22.000",
    "description": "Spaghetti aux fruits de mer : pâtes, moules, coques, crevettes, fruits de mer",
  },
  {      "id": "3",
  "nom": "Salade",
  "image": "../assets/images/Salade.png",
  "categorie": "Entree",
  "special": false,
  "label": "",
  "prix": "7.900",
  "description": "Salade fruit de mer avec du maïs, laitu, poulpe, des calamars.",
  }
 ];
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  plats = PLATS;
  constructor() { }

  ngOnInit(): void {
  }

}
