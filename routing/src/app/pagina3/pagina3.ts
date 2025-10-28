import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudenteService, Studente } from '../services/studenti-service';

@Component({
  selector: 'app-pagina3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagina3.html',
  styleUrl: './pagina3.css',
})
export class Pagina3 implements OnInit {
  private studenteService = inject(StudenteService);
  studenti: Studente[] = [];

  ngOnInit() {
    this.studenteService.studenti$.subscribe((studenti: Studente[]) => {
      this.studenti = studenti;
    });
  }

  rimuoviStudente(id: number) {
    this.studenteService.rimuoviStudente(id);
  }
}