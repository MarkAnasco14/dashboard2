import { Component } from "@angular/core";

@Component({
  selector: "app-prelim",
  templateUrl: "./Prelim.component.html",
  styleUrls: ["./Prelim.component.css"],
})
export class PrelimComponent {
  tableData = [
    { col1: "Data 1", col2: "Data 2", col3: "Data 3" },
    { col1: "Data 4", col2: "Data 5", col3: "Data 6" },
    { col1: "Data 7", col2: "Data 8", col3: "Data 9" },
  ];
}
