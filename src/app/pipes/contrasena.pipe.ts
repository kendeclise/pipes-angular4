import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, condicion?: boolean): string {

    if (condicion == null || condicion === true) {
      let cadena = '';
      for (let i of value){
        cadena += '*';
      }
      return cadena;
    }else {
      return value;
    }
  }

}
