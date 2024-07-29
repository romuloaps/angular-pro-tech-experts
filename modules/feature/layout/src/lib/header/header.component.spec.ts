import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeaderComponent } from "./header.component";

describe("HeaderComponent", () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HeaderComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("deve ter o título", () => {
        const titulo = "Título de teste";
        component.title = titulo;
        fixture.detectChanges();

        const header: HTMLElement = fixture.nativeElement.querySelector("header");

        expect(header.childElementCount).toBe(1);
        expect(header.firstChild?.nodeName.toLocaleLowerCase()).toBe("h1");
        expect(header.firstChild?.textContent).toBe(titulo);
    });
});
