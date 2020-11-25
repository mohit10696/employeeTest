import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class colorservice {

  getcolor(name:any){

    if (name.salary < 10000){
      return 'Azure';
    }else if (name.salary < 20000){
      return 'BlueViolet';
    }else if (name.salary < 30000){
      return 'DarkCyan';
    }
    return 'DarkSlateGrey';
  }
}


