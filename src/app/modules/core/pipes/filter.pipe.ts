import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(data: any, args?: any): any {
    if (data) {
      let property: string = args[0];
      let value: any = args[1];      
      return data.filter(d => d[property] === value);
    }
    return null;
  }
}
