import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Studente {
  id: number;
  nome: string;
  classe: string;
  mediaVoti: number;
  mostraMedia?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class StudenteService {
  
  private studentiIniziali: Studente[] = [
    { id: 1, nome: 'Mario', classe: '5D', mediaVoti: 4.1 },
{ id: 2, nome: 'Luca', classe: '5D', mediaVoti: 7.3 },
{ id: 3, nome: 'Luigi', classe: '5D', mediaVoti: 3.9 },
{ id: 4, nome: 'Paolo', classe: '5D', mediaVoti: 7.0 },
{ id: 5, nome: 'Andrea', classe: '5D', mediaVoti: 5.7 },
  ];

  private studentiSubject = new BehaviorSubject<Studente[]>(this.studentiIniziali);
  public studenti$: Observable<Studente[]> = this.studentiSubject.asObservable();
  
  private nextId = 4;  // Inizia da 4 perché hai già 3 studenti

  constructor() {}

  getStudenti(): Studente[] {
    return this.studentiSubject.value;
  }

  aggiungiStudente(nome: string, classe: string, mediaVoti: number): void {
    const studenti = this.studentiSubject.value;
    const nuovoStudente: Studente = {
      id: this.nextId++,
      nome,
      classe,
      mediaVoti,
      mostraMedia: false
    };
    this.studentiSubject.next([...studenti, nuovoStudente]);
  }

  rimuoviStudente(id: number): void {
    const studenti = this.studentiSubject.value.filter(s => s.id !== id);
    this.studentiSubject.next(studenti);
  }
}