import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { SearchPageComponent } from "./pages/search-page/search-page.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "search", component: SearchPageComponent },
  { path: "**", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
