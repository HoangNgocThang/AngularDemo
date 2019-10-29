import { Injectable } from "@angular/core";
import { HEROES } from "../mocks/hero";
import { Hero } from "../models/hero";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  private heroUrl = "http://localhost:3000/heros";

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    // return of(HEROES);
    return this.http.get<Hero[]>(this.heroUrl).pipe(
      tap(res => {
        console.log("data from api", res);
      }),
      catchError(error => of([]))
    );
  }
}
