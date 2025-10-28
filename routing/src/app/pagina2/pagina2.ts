import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StudenteService } from '../services/studenti-service';

@Component({
  selector: 'app-pagina2',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './pagina2.html',
  styleUrl: './pagina2.css',
})
export class Pagina2 {
  private studenteService = inject(StudenteService);
  
  nuovoStudente = {
    nome: '',
    classe: '',
    mediaVoti: 0
  };

  aggiungiStudente() {
    if (this.nuovoStudente.nome && this.nuovoStudente.classe) {
      this.studenteService.aggiungiStudente(
        this.nuovoStudente.nome,
        this.nuovoStudente.classe,
        this.nuovoStudente.mediaVoti
      );
      
      this.nuovoStudente = {
        nome: '',
        classe: '',
        mediaVoti: 0
      };
    }
  }
}