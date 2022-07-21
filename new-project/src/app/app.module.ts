import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";

import { APP_EXTRA_OPTIONS, APP_ROUTES } from "./app.routes";
import { HotelModule } from './hotel/hotel.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([...APP_ROUTES], { ...APP_EXTRA_OPTIONS }),
    HotelModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
