import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LayoutModule } from "@ecommerce/layout";
import { ProdutoBuscaComponent } from "@ecommerce/produto-busca";

@Component({
    standalone: true,
    imports: [RouterModule, LayoutModule, ProdutoBuscaComponent],
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss",
})
export class AppComponent {
    title = "ecommerce";
}
