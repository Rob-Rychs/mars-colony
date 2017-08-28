import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
 name: 'orderByPipe'
})
export class OrderByPipe implements PipeTransform{


 transform(array: Array<any>, args: string): Array<string> {

  if(!array || array === undefined || array.length === 0) return null;
    array.filter(function(el) {
      return (el.date.substring(0,3 ) === "2017")
    }).sort((a: any, b: any) => {
      if (a.date.substring(0,4).parseInt() > b.date.substring(0,4).parseInt()) {
        return -1;
      } else if (a.date.substring(0,4).parseInt() < b.date.substring(0,4).parseInt()) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}