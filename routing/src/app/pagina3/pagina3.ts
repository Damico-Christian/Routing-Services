import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pagina3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagina3.html',
  styleUrl: './pagina3.css'
})
export class Pagina3 {
  studenti = [
    { id: 1, nome: 'Mario', classe: '5D', mediaVoti: 4.1, mostraMedia: false },
    { id: 2, nome: 'Luca', classe: '5D', mediaVoti: 7.3, mostraMedia: false },
    { id: 3, nome: 'Luigi', classe: '5D', mediaVoti: 3.9, mostraMedia: false },
    { id: 4, nome: 'Paolo', classe: '5D', mediaVoti: 7.0, mostraMedia: false },
    { id: 5, nome: 'Andrea', classe: '5D', mediaVoti: 5.7, mostraMedia: false },
  ];
}
