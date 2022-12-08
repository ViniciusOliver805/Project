import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRadarchartComponent } from './card-radarchart.component';

describe('CardRadarchartComponent', () => {
  let component: CardRadarchartComponent;
  let fixture: ComponentFixture<CardRadarchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardRadarchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardRadarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
