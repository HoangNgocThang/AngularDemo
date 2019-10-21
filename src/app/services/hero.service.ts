import { Injectable } from "@angular/core";
import { HEROES } from "../mocks/hero";
import { Hero } from "../models/hero";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  constructor(private heroService: HeroService) {}

  getHeroes(): Hero[] {
    return HEROES;
  }
}
