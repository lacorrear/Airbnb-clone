import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-place-card",
  templateUrl: "./place-card.component.html",
  styleUrls: ["./place-card.component.scss"],
})
export class PlaceCardComponent implements OnInit {
  @Input("src") src: string; // Image src
  @Input("title") title: string;
  @Input("description") description: string;
  @Input("price") price: string;
  constructor() {}

  ngOnInit(): void {}
}
