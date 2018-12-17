import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
  transform(value :any[], term?: string):any[]   {
    if(!value)return null;
    if (!term) {
      return value;
    }
    else{
      return value.filter(function(item:any)  {
          return item.name.toLowerCase().includes(term);
        }
      );
    }}
}
