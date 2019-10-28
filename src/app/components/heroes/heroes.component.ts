import { Component, OnInit } from "@angular/core";
import { Hero } from "../../models/hero";
import { HeroService } from "../../services/hero.service";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.scss"]
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: Math.floor(Math.random() * 100) + 1,
    name: ""
  };

  heroes: Hero[];

  constructor(private heroService: HeroService) {
    console.log("constructor");
  }

  //get data from service
  getData = () => {
    this.heroService.getHeroes().subscribe(data => {
      console.log(data, "data from service");
      this.heroes = data;
    });
  };

  ngOnInit() {
    console.log("ngOnInit");
    this.getData();
  }

  onClickItem = (hero: Hero, index: number) => {
    alert(hero.name);
  };

  addHero = (hero: string, id: number) => {
    this.heroes.push({ id, name: hero });
  };

  ngOnChanges() {
    console.log("ngOnChanges");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }
}
