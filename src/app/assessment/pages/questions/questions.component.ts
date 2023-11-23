import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent {
  questions: string[] = [
    '¿Has experimentado dificultades a la hora de comunicarse con gente cercana a usted?',
    '¿Te has enfrentado a desafíos al expresar tus pensamientos a las personas que te rodean?',
    '¿Has tenido situaciones en las que la comunicación con tus seres queridos fue complicada?',
    '¿Alguna vez has sentido que tus mensajes no fueron comprendidos adecuadamente por tus amigos o familiares?',
    '¿Encuentras difícil comunicar tus emociones de manera efectiva con las personas cercanas a ti?',
    '¿Has experimentado malentendidos al intentar comunicarte con aquellos que son importantes para ti?',
    '¿Te resulta a veces complicado transmitir tus ideas de manera clara a tu círculo cercano?',
    '¿Has tenido dificultades para establecer una comunicación abierta y honesta con tu familia?',
    '¿Alguna vez te has sentido incomprendido al comunicarte con amigos cercanos?',
    '¿Experimentas obstáculos al tratar de comunicarte de manera efectiva con las personas que te rodean?'
  ];
}
