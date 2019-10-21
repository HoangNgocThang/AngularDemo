import { Component, OnInit } from "@angular/core";
import { HEROES } from "../../mocks/hero";
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

  // heroes = HEROES;

  heroes: Hero[];

  constructor(private heroService: HeroService) {}

  //get data from service
  getData = () => {
    this.heroes = this.heroService.getHeroes();
  };

  ngOnInit() {
    this.getData();
  }

  onClickItem = (hero: Hero, index: number) => {
    console.log("aaaa", hero.name);
    alert(hero.name);
  };
}
