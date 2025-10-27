import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'studente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './studente.html',
  styleUrl: './studente.css'
})
export class Studente {
  @Input() datiStudente: any;
  mostraMedia = false;

  toggleMedia() {
    this.mostraMedia = !this.mostraMedia;
  }
}
