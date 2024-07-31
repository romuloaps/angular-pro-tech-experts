import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Produto } from "../models/produto.model";

@Injectable({
    providedIn: "root",
})
export class ProdutoSearchService {
    readonly API_URL = "https://localhost:3001/ecommerce";

    constructor(private http: HttpClient) {}

    searchByName(name: string): Observable<Produto[]> {
        return this.http.get<Produto[]>(`${this.API_URL}/produtos`, {
            params: {
                name_like: name,
            },
        });
    }
}
