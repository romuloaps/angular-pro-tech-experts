import { Component, Input } from "@angular/core";

@Component({
    selector: "layout-header",
    templateUrl: "./header.component.html",
})
export class HeaderComponent {
    @Input({ required: true }) title = "";
}
