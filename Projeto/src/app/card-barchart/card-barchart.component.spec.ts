import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBarchartComponent } from './card-barchart.component';

describe('CardBarchartComponent', () => {
  let component: CardBarchartComponent;
  let fixture: ComponentFixture<CardBarchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardBarchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardBarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
