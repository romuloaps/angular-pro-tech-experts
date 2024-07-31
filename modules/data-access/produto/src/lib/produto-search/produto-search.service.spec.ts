import { HttpTestingController, provideHttpClientTesting } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";

import { provideHttpClient } from "@angular/common/http";
import { ProdutoSearchService } from "./produto-search.service";

import { MOCK_PRODUTOS } from "../mocks/produto.mock";
import { Produto } from "../models/produto.model";

describe("ProdutoSearchService", () => {
    let service: ProdutoSearchService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [provideHttpClient(), provideHttpClientTesting()],
        });
        service = TestBed.inject(ProdutoSearchService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });

    it("deve retornar produtos que contem o nome informado", () => {
        const nome = "shirt";
        const url = `${service.API_URL}/produtos?name_like=${nome}`;
        let resultado: Produto[] = [];

        service.searchByName(nome).subscribe((produtos) => (resultado = produtos));

        const request = httpMock.expectOne({
            method: "GET",
            url: url,
        });
        request.flush(MOCK_PRODUTOS);
        expect(resultado).toEqual(MOCK_PRODUTOS);
    });

    afterEach(() => {
        TestBed.inject(HttpTestingController).verify();
    });
});
