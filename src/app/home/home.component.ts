import { Component, OnInit } from "@angular/core";
import { HomeService } from "../home.service";
import { Observable } from "rxjs";
import { CustomCurrencyPipe } from "../custom-currency.pipe";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  providers:[CustomCurrencyPipe]
})
export class HomeComponent implements OnInit {
  movies$: Observable<any>;
  direction = 'asc';
  prop: any;
  searchText: any;
  nrSelect = "Action";
  constructor(private _homeService: HomeService) {}

  ngOnInit() {
    this.movies$ = this._homeService.getData();

  }

  trackById(index, item) {
    return item.id;
  }

  sortData = (prop: string) => {
    this.prop = prop;
    this.direction = this.direction == 'asc' ? 'desc' : 'asc';
  }
  
  getSortClass = (prop) => {
    return {
      'fa-sort': this.prop !== prop,
      'fa-caret-up': this.prop === prop && this.direction === 'asc',
      'fa-caret-down': this.prop === prop && this.direction === 'desc'
    };
  }
}
