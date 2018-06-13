import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringFilter'
})
export class StringFilterPipe implements PipeTransform {

  transform(value: any, filter: string, field: string): any {
    if (value.length === 0 || filter === '') {
      return value;
    }
    const results = [];
    for (const item of value) {
      if (item[field].includes(filter)) {
        results.push(item);
      }
    }
    return results;
  }

}
