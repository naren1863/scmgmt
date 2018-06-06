import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  public orgType: string = 'SCHOOL';
  public static loggedInUser: string;

  public static setLoggedInUser(user: string){
    this.loggedInUser = user;
  }
}