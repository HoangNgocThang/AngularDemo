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
    id: 1,
    name: "Windstorm"
  };

  heroes: Hero[];

  constructor(private heroService: HeroService) {
    console.log("constructor");
  }

  //get data from service
  getData = () => {
    this.heroes = this.heroService.getHeroes();
  };

  ngOnInit() {
    console.log("ngOnInit");
    this.getData();
  }

  onClickItem = (hero: Hero, index: number) => {
    alert(hero.name);
  };

  ngOnChanges() {
    console.log("ngOnChanges");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }
}
