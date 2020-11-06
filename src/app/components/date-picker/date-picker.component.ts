import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import {
  IgxDialogComponent,
  IgxCalendarComponent,
  DateRangeType,
} from "igniteui-angular";

@Component({
  selector: "app-date-picker",
  templateUrl: "./date-picker.component.html",
  styleUrls: ["./date-picker.component.scss"],
})
export class DatePickerComponent implements OnInit {
  today = new Date(); //Today date
  numberOG: number = 0; //number og Guests

  @ViewChild("alert", { static: true }) public dialog: IgxDialogComponent;
  @ViewChild("calendar", { static: true })
  public calendar: IgxCalendarComponent;

  range = [];
  // Range whit disable dates
  public rangeDisabled = [
    // Started day
    new Date(this.today.getFullYear() - 5, this.today.getMonth(), 1),
    // End day
    new Date(
      this.today.getFullYear(),
      this.today.getMonth(),
      this.today.getDay()
    ),
  ];

  constructor(public element: ElementRef) {}

  ngOnInit(): void {
    // Disabled dates
    this.calendar.disabledDates = [
      { type: DateRangeType.Between, dateRange: this.rangeDisabled },
    ];
  }

  public selectDates(dates: Date[]) {
    this.range = dates;
  }

  public submitDates(eventArgs) {
    if (this.range.length < 2) {
      this.dialog.message = "Select dates from the Calendar first.";
    } else {
      if (this.numberOG > 0) {
        this.dialog.message = "Request for your stay has been submitted !";
      } else {
        this.dialog.message = "Please add number of guests";
      }
    }
    this.dialog.open();
  }
}
