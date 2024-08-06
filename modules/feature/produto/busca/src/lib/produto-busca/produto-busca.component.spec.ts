import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { ProdutoBuscaComponent } from "./produto-busca.component";

describe("ProdutoBuscaComponent", () => {
    let component: ProdutoBuscaComponent;
    let fixture: ComponentFixture<ProdutoBuscaComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ProdutoBuscaComponent, NoopAnimationsModule],
        }).compileComponents();

        fixture = TestBed.createComponent(ProdutoBuscaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
