import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {


  transform(name: string, Gender: string): string {
    if (Gender.toLowerCase() == "male")
        return "Mr. " + name;
    else
        return "Miss. " + name;
  }

}
