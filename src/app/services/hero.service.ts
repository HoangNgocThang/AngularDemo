import { Injectable } from "@angular/core";
import { HEROES } from "../mocks/hero";
import { Hero } from "../models/hero";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  constructor(private heroService: HeroService) {}

  delay = (number: number) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, number);
    });
  };

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
