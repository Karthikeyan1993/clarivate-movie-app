import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { HomeService } from "./home.service";
import { HttpClientModule } from "@angular/common/http";
import { TableFilterPipe } from "./table-filter.pipe";
import { TableSortPipe } from "./table-sort.pipe";
import { CustomCurrencyPipe } from "./custom-currency.pipe";
import { CurrencyPipe } from '@angular/common';


@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HomeComponent,
    TableFilterPipe,
    TableSortPipe,
    CustomCurrencyPipe
  ],
  bootstrap: [AppComponent],
  providers: [HomeService,CurrencyPipe]
})
export class AppModule {}
