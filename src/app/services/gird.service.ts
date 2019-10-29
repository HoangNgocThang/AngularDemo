import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class GirdService {
  private url = "https://api.myjson.com/bins/15psn9";

  constructor(private http: HttpClient) {}

  getData(): Observable<{ make: string; model: string; price: number }[]> {
    return this.http
      .get<{ make: string; model: string; price: number }[]>(this.url)
      .pipe(
        tap(res => {
          console.log("data", res);
        }),
        catchError(error => of([]))
      );
  }
}
