import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HotelModule } from "./hotel/hotel.module";

import { APP_EXTRA_OPTIONS, APP_ROUTES } from "./app.routes";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HotelModule,
    HttpClientModule,
    RouterModule.forRoot([...APP_ROUTES], { ...APP_EXTRA_OPTIONS }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
