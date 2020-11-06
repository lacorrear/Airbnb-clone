import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { IgxAvatarModule } from "igniteui-angular";
import { IgxDateRangePickerModule } from "igniteui-angular";
import { IgxCalendarModule, IgxDialogModule } from "igniteui-angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BannerComponent } from "./components/banner/banner.component";
import { DatePickerComponent } from "./components/date-picker/date-picker.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { PlaceCardComponent } from "./components/place-card/place-card.component";
import { MaterialModule } from "./modules/material/material.module";
import { HomeComponent } from "./pages/home/home.component";
import { SearchPageComponent } from "./pages/search-page/search-page.component";
import { SearchResultComponent } from './components/search-result/search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BannerComponent,
    PlaceCardComponent,
    FooterComponent,
    SearchPageComponent,
    DatePickerComponent,
    SearchResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxAvatarModule,
    IgxDateRangePickerModule,
    IgxCalendarModule,
    IgxDialogModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
