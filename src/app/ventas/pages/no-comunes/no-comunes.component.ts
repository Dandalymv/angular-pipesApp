import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  //i18nSelect
  nombre: string = "Dan";
  sexo: string = "masculino";
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Carla', 'Dan'];
  clientesMapa = {
    '=0': 'no tenemos clientes esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando'

  }

  constructor() { }

  ngOnInit(): void {
  
  }

  cambiarPersona(){
    this.nombre = "Daniela"
    this.sexo = "femenino"
  }

  borrarCliente(){
    // this.clientes.splice(0, 1);
    this.clientes.pop();
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Ottawa, Canada'
  }

  //Jason pipe
  heroes = [
    {
      nombre: 'Supermnan',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  //Async Pipe
  miObservable = interval(5000); //0,1,2,3,4,5...

  valorPromesa = new Promise((resolve, rejects) =>{
    setTimeout(() => {
      resolve('Tenemos data de promesa')
    }, 3500);
  });

}
