import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MOCK_PRODUTOS } from "@ecommerce/produto-data-access";

@Component({
    selector: "lib-produto-busca",
    standalone: true,
    imports: [CommonModule, MatAutocompleteModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule],
    templateUrl: "./produto-busca.component.html",
})
export class ProdutoBuscaComponent {
    control: FormControl = new FormControl("");
    produtos = MOCK_PRODUTOS;
}
