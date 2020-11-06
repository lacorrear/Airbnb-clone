import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-search-result",
  templateUrl: "./search-result.component.html",
  styleUrls: ["./search-result.component.scss"],
})
export class SearchResultComponent implements OnInit {
  @Input("srcImage") srcImage: string;
  @Input("location") location: string;
  @Input("title") title: string;
  @Input("description") description: string;
  @Input("star") star: string;
  @Input("price") price: number;
  @Input("total") total: string;

  constructor() {}

  ngOnInit(): void {}
}
