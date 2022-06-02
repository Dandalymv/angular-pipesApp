import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'dandaly';
  nombreUpper: string = 'DANDALY';
  nombreCompleto: string = 'daNdALy mORaLeS'

  fecha: Date = new Date; //fecha de hoy

}
