import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";

describe("AppComponent", () => {
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppComponent, RouterModule.forRoot([])],
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
    });

    it("deve conter a tag header", () => {
        const header: HTMLElement = fixture.nativeElement.querySelector("header");
        expect(header).toBeTruthy();
    });
});
