import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'postFixer'
})
export class PostFixerPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return '321' + value + '123';
  }

}
